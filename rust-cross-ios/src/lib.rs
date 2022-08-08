#[no_mangle]
pub extern "C" fn add(a: i64, b: i64) -> i64 {
    rust_cross::add(a, b)
}

#[no_mangle]
pub extern "C" fn sub(a: i64, b: i64) -> i64 {
    rust_cross::sub(a, b)
}
