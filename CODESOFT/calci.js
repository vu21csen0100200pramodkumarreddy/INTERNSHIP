function dis(a)
{
    document.getElementById("res").value+=a
}
function res()
{
    let x=document.getElementById("res").value
    let y=eval(x)
    document.getElementById("res").value=y
}
function clr()
{
    document.getElementById("res").value=""
}