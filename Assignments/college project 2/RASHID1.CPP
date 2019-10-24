#include<iostream.h>
#include<conio.h>
#include<graphics.h>
int main()
{
int gd=0,gm;
initgraph(&gd,&gm,"..//bgi");
setcolor(2);
rectangle(530,420,200,100);
circle(365,260,160);
getch();
closegraph();
}