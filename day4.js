    //property(length), array methods (slice, splice, split)
    let nums = [1,2,3,4,5,6,7,8]
    //  console.log(nums.length)

    //slice
    let slicedNumbers = nums.slice(2,5)
    console.log(slicedNumbers)

    let days = ["sun","mon","tue","wed","thur"]
   let slicedDays = days.slice(days.indexOf("mon"),days.indexOf("wed"))
    console.log(slicedDays)

    let evenNums = [2,4,6,8,10]
    //output --> [8,10]

       let slicedEvenNums = evenNums.slice(3,5)
       console.log(slicedEvenNums)


       //splice
       
       let data = [ 1,2,3,4,5,6]
       data.splice(1,3,"hello","bye","world")
       console.log(data)

       let characters = ['m','a','n','i','s','h']
       //output --> [13,1,14,9,19,8]
            //characters.splice(0,6,13,1,14,9,19,8)
            characters.splice(0,characters.length,13,1,14,9,19,8)
            console.log(characters)     
            
            
          //split
          let message = "I am Ashwan Shrestha"
                let splitMessage = message.split(" ")
                console.log(splitMessage)   

                let text = "I,am,from,nepal"
               let splitText = text.split(",")
                console.log(splitText)