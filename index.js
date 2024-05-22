// Deli Counter Lab

// 1. Create the function line() here
function line(list) {
    // if the list is empty .length will be 0, which is falsey -> ergo the ! in front of it
    if (!list.length) {
        return 'The line is currently empty.'
    } else {
        // set the initial message with the hardcoded text
        let message = 'The line is currently:'
        // set the initial index counter for the loop
        let i = 0
        // loop through the list and add the index and the name to the message
        while (i < list.length) {
            message += ` ${i + 1}. ${list[i]}`
            // don't forget to increment the index counter
            i++
        }
        // now that the message is complete, return it
        return message
    }
}

// 2. Create the function takeANumber() here
function takeANumber(list, name) {
    // add the name to the list
    list.push(name)
    // return the welcome message with the name and the position in line interpolated
    return `Welcome, ${name}. You are number ${list.length} in line.`
}

// 3. Create the function nowServing() here
function nowServing(list) {
    // if the list is empty .length will be 0, which is falsey -> ergo the ! in front of it
    if (!list.length) {
        return 'There is nobody waiting to be served!'
    }

    // remove the first person from the list
    // and, at the same time, return the message with the name interpolated
    return `Currently serving ${list.shift()}.`
}
