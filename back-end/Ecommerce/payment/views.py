from django.shortcuts import render
import razorpay 
from .serializers import PaymentSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

# Create your views here.

client = razorpay.Client(auth=(settings.RAZOR_KEY_ID, settings.RAZOR_KEY_SECRET))

@csrf_exempt
def createPayment(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        currency = request.POST.get('currency')
        if amount is None or currency is None:
            return JsonResponse({"error": "Missing amount or currency in request."}, status=400)

        try:
            amount = int(amount)
        except ValueError:
            return JsonResponse({"error": "Amount or currency must be valid integers."}, status=400)

        order = client.order.create(dict(amount=amount,currency=currency))
        serializer = PaymentSerializer(data=dict(
            razorpay_order_id=order['id'],
            amount=order['amount'],
            currency=order['currency'],
            status=order['status']))
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return JsonResponse(serializer.data)
    return JsonResponse({"error": "Invalid request method."}, status=405)