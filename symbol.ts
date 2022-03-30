let demo1 =Symbol("d1");
// console.log (s1);
class Demo{
    [demo1]()
    {
        return "some data"
    }
}
let d1=new Demo();
console.log(d1[demo1]());