var str="abcdefghijklmnpqrstuvwxyz";
var arg1="xyz";
function f_match(word)
{	
	var j=0;
	for (i=0;i<str.length;i++)
	{
		if (str[i]==word[j])
		{
			j=j+1;
		}
		else
		{
			j=0;
		}
		if (j==word.length-1)
		{
			return arg1;
		}
		else if (i==str.length-1)
		{
			return null;
		}
	}
}
a=f_match(arg1);
document.write(a);
