fn main (){
    
    let arr = [1,2,3,4,5,6,7];

    for x in arr.iter()  {
        match x {
            1 => println!("Eat Cheese"),
            2 | 3 => println!("Eat Bread"),
            4..=6 => println!("Eat Good"),
            _ => println!("boooooo")
        }
    }



}