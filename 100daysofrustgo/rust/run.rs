fn main (){
    let my_vec: Vec<String> = vec![String::from("cheese"), String::from("blue")];
    let filter_result: Vec<_> = my_vec.iter().filter(|x| x.to_owned().eq("blue")).collect();
    println!("{:?}", filter_result);
}