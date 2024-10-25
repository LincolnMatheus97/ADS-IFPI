#include <stdio.h> 
 
void x(char *str1, char *str2) { 
    while (*str1) { 
        str1++; 
    } 
    while (*str2) { 
        *str1 = *str2; 
        str1++; 
        str2++; 
    } 
    *str1 = '\0'; 
} 
 
int main() { 
    char str1[100] = "Hello "; 
    char str2[] = "World!"; 
    x(str1, str2); 
    printf(" %s\n", str1); 
    return 0; 
} 