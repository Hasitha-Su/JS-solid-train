//lexical scope

function iMac() {
    let name1 = "iMac"
    console.log(`function 1: ${name1}`)
    // error
    //console.log(`Mac book pro ${name1}, ${name2}, ${name3}`)
    mac_book_pro()

    function mac_book_pro() {
        let name2 = "Mac book pro"
        console.log(`function 2: ${name1}, ${name2}`)
        // error
        //console.log(`Mac book pro ${name1}, ${name2}, ${name3}`)
        mac_book_air()

        function mac_book_air() {
            let name3 = "Mac book air"
            console.log(`function 3: ${name1}, ${name2}, ${name3}`)
        }
    }
}

iMac()