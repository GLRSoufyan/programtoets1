function validateForm(event) {
    // Zorgt ervoor dat de form niet verstuurt als er niks is ingevult
    event.preventDefault();

    // Fetched all informatie die de gebruiker gegeven heeft
    const firstName = document.getElementById('voornaam').value;
    const lastName = document.getElementById('achternaam').value;
    const city = document.getElementById('plaatsnaam').value;
    const postalCode = document.getElementById('postcode').value;
    const albumPrice = parseFloat(document.getElementById('album').value);
    const ticketsPrice = parseFloat(document.getElementById('tickets').value);

    // Als allebij de gekochte objecten 0 euro kosten (dus niks gekocht is) komt er een error te staan
    if (albumPrice === 0 && ticketsPrice === 0) {
        alert('Je moet tenminste IETS kiezen om te kopen');
        return false;
    }

    let totalPrice = albumPrice + ticketsPrice;
    let discount = 0;

    // Als allebei de album en concert tickets gekocht zijn krijgt de user een discount
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