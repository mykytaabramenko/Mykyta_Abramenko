function sortedFriendsList(friendsList) {
    return friendsList
        .toUpperCase()
        .split(';')
        .map((item) => {
            let new_item = item.split(':');
            return `(${new_item[1]}, ${new_item[0]})`;
        })
        .sort()
        .join(' ');
}
// example
document.write(
    sortedFriendsList(
        'Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
    )
);
