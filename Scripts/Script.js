function validateForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('voornaam').value;
    const lastName = document.getElementById('achternaam').value;
    const city = document.getElementById('plaatsnaam').value;
    const postalCode = document.getElementById('postcode').value;
    
    const albumPrice = parseFloat(document.getElementById('album').value);
    const ticketsPrice = parseFloat(document.getElementById('tickets').value);

    if (albumPrice === 0 || ticketsPrice === 0) {
        alert('Je moet zowel een album als tickets kiezen!');
        return false;
    }

    let totalPrice = albumPrice + ticketsPrice;
    let discount = 0;

    if (albumPrice > 0 && ticketsPrice > 0) {
        discount = totalPrice * 0.10;
        totalPrice -= discount;
    }

    let confirmationMessage = `
        <strong>Naam:</strong> ${firstName} ${lastName}<br>
        <strong>Adres:</strong> ${city}, ${postalCode}<br>
        <strong>Album:</strong> €${albumPrice}<br>
        <strong>Tickets:</strong> €${ticketsPrice}<br>
    `;

    if (discount > 0) {
        confirmationMessage += `
            <strong>Korting (10%):</strong> -€${discount.toFixed(2)}<br>
        `;
    }

    confirmationMessage += `
        <strong>Totaal te betalen:</strong> €${totalPrice.toFixed(2)}<br>
    `;

    document.getElementById('orderDetails').innerHTML = confirmationMessage;
    document.getElementById('confirmation').style.display = 'block';

    document.getElementById('contact').style.display = 'none';

    return false;
}