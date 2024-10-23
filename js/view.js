class View {
  constructor() {
    this.div = document.createElement('div');
    this.inputButton = document.createElement('input'); // Create the button
    this.inputButton.value = '0';
    this.div.appendChild(this.inputButton);

    this.incrementButton = document.createElement('button');
    this.decrementButton = document.createElement('button');
    this.incrementButton.textContent = '+';
    this.decrementButton.textContent = '-';
    this.div.appendChild(this.incrementButton);
    this.div.appendChild(this.decrementButton);

    this.top = document.createElement('div');
    this.top.classList.add('top-container'); // Add class for styling

    this.svgImage = document.createElement('img');
    this.svgImage.src = './svg/return-up-back-svgrepo-com.svg';
    this.svgImage.classList.add('svg-image'); // Add class for styling
    this.top.appendChild(this.svgImage);

    this.title = document.createElement('h1');
    this.title.textContent = 'Séance';
    this.title.classList.add('centered-title'); // Add class for styling
    this.top.appendChild(this.title);

    this.underTop = document.createElement('div');
    this.underTop.classList.add('top-container'); // Add class for styling

    this.place = document.createElement('h2');
    this.place.textContent = 'Place';
    this.place.classList.add('centered-title'); // Add class for styling
    this.underTop.appendChild(this.place);

    this.date = document.createElement('p');
    this.date.textContent = 'Date';
    this

    this.details = document.createElement('div');
    this.details.classList.add('details'); // Add class for styling

    this.detailsTitle = document.createElement('p');
    this.detailsTitle.textContent = 'Détails';
    this.detailsTitle.classList.add('centered-title'); // Add class for styling
    this.details.appendChild(this.detailsTitle);

    this.detailsText = document.createElement('p');
    this.detailsText.textContent = '-Tournois 5x5';
    this.details.appendChild(this.detailsText);

    this.participants = document.createElement('div');
    this.participants.classList.add('participants'); // Add class for styling

    this.participantsTitle = document.createElement('p');
    this.participantsTitle.textContent = 'Participants';
    this.participantsTitle.classList.add('centered-title'); // Add class for styling
    this.participants.appendChild(this.participantsTitle);

    let participantsList = document.createElement('ul');
    participantsList.classList.add('participants-list'); // Add class for styling

    const participants = ['John Doe', 'Jane Doe', 'Johnny Doe'];
    participants.forEach((participant, index) => {
      let listItem = document.createElement('li');
      listItem.classList.add('participant-item'); // Add class for styling

      let img = document.createElement('img');
      img.src = `./userImage/participant${index + 1}.png`; // Assuming images are named participant1.jpg, participant2.jpg, etc.
      img.classList.add('participant-image'); // Add class for styling

      let name = document.createElement('span');
      name.textContent = participant;
      name.classList.add('participant-name'); // Add class for styling

      listItem.appendChild(img);
      listItem.appendChild(name);
      participantsList.appendChild(listItem);
    });

    this.participants.appendChild(participantsList);

    this.participeButton = document.createElement('button');
    this.participeButton.textContent = 'Participer';
    this.participeButton.classList.add('participe-button'); // Add class for styling
    this.participants.appendChild(this.participeButton);

    let nodeParticipants = document.querySelector('#participants');
    nodeParticipants.appendChild(this.participants);

    let nodeDetails = document.querySelector('#details');
    nodeDetails.appendChild(this.details);

    let nodeUnderTop = document.querySelector('#under-top');
    nodeUnderTop.appendChild(this.underTop);

    let nodeTop = document.querySelector('#top');
    nodeTop.appendChild(this.top);

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }
}