export function formatTicket(ticket, type) {
    let formated;

    if(ticket > 999) {
        formated = ticket.toString();
    } else if(ticket > 99) {
        formated = "0" + ticket.toString();
    } else if(ticket > 9) {
        formated = "00" + ticket.toString();
    } else {
        formated = "000" + ticket.toString();
    }

    return type+formated;
}