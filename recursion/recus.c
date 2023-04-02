#include <stdio.h>

void rec(int n)
{
    if (n == 1)
        return;
    printf("Recusion %i\n", n);
    rec(n - 1);
};
// Sum
void sum(int n)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum += i;
    }
    printf("Sum = %i", sum);
};
// Factorail;
void fact(int n)
{
    printf("Factoraial %i \n", n);
    int f;
    for (f = 1; n > 1; n--)
        f *= n;

    printf("factorail = %i \n", f);
    // free(f);
};

// Factorial
int factorial(int n)
{
    if (n == 1)
        return n;
    return n * factorial(n - 1);
};
int Permutation(int n , int r) {
    return factorial(n) / factorial(n - r);
}
int Combination(int n , int r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

int main()
{
    // rec(10);
    // sum(5);
    // fact(10);
    // int f = factorial(10);
    // printf("Factorial = %i", f);
    int p = Permutation(26,5);
    printf("Permutation = %i \n", p);
    int c = Combination(26,5);
    printf("Combination = %i \n", c);
    return 0;
}