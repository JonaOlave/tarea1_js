from django.shortcuts import render

# Create your views here.
def inicio_sitio(request):
    return render( request, 'inicio/base.html')