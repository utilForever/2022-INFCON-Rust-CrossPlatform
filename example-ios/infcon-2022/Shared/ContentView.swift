//
//  ContentView.swift
//  Shared
//
//  Created by Chris Ohk on 2022/08/26.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        let rustCross = RustCross()
        Text(String(rustCross.do_add(a: Int64(10), b: Int64(20))))
        Text(String(rustCross.do_sub(a: Int64(10), b: Int64(20))))
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
