#include <stdio.h>

int main()
{
    char daysOfWeek[7][10] = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
	int in;
	scanf("%d", &in);
	
	if (in >= 0 && in < 7) {
	    printf("Pointer version: %s\n", *(daysOfWeek + in));
	    printf("Array index version: %s\n", daysOfWeek[in]);
	} else {
	    printf("Error, no such day.");
	}
	return 0;
}