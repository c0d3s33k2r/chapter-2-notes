for (let x=0; x < 100; x++) {
    if (x % 15 == 0)
    {
        console.log("fizzbuzz")

    }else if (x % 3 == 0)
    {
        console.log("fizz")

    }else if (x % 5 == 0)
    {
        console.log("buzz")
    }
    else{
        console.log(x);
    }
}