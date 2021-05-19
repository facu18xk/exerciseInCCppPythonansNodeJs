#include<stdio.h>
int main(){
  int n1, n2;
  printf("Introduzca un numero entero: ");
  scanf("%d", &n1);
  printf("Introduzca un segundo entero: ");
  scanf("%d", &n2);
  printf("La suma de los dos numeros es: %d, la resta de los dos numeros es: %d, la multiplicacion de los dos numeros es: %d y la division de los dos numeros es: %d\n",n1+n2, n1-n2, n1*n2,n1/n2);
  return 0;
}