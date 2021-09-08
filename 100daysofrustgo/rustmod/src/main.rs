mod utils;
use serde_json::{Result, Value};

fn main() {
    // println!("Hello, world!");
    utils::utils2::cheese();
    // let example = r#"
    // {
    //     "name": "John Doe",
    //     "age": 43,
    //     "phones": [
    //         "+44 1234567",
    //         "+44 2345678"
    //     ]
    // }"#;

    let arr = [1,2,3,4,5,6];
    // let result:Value;
    // let result:Value = serde_json::from_str(example).expect("weee");
    let json = serde_json::to_string(&arr).expect("didn't work");

    println!("{:?}",json);
}
