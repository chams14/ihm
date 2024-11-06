class View {
  constructor() {


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
    this.underTop.classList.add('under-top-container'); // Add class for styling

    this.place = document.createElement('h2');
    this.place.textContent = 'Place';
    this.place.classList.add('centered-title'); // Add class for styling
    this.underTop.appendChild(this.place);

    this.dateHeureContainer = document.createElement('div');
    this.dateHeureContainer.classList.add('date-container'); // Add class for styling

    this.date = document.createElement('h2');
    this.date.textContent = '';
    this.date.classList.add('date'); // Add class for styling
    this.dateHeureContainer.appendChild(this.date);

    this.heure = document.createElement('h2');
    this.heure.textContent = '';
    this.heure.classList.add('heure'); // Add class for styling
    this.dateHeureContainer.appendChild(this.heure);

    this.underTop.appendChild(this.dateHeureContainer);

    this.details = document.createElement('div');
    this.details.classList.add('details'); // Add class for styling

    this.detailsTitle = document.createElement('h2');
    this.detailsTitle.textContent = 'Détails';
    this.detailsTitle.classList.add('centered-title'); // Add class for styling
    this.details.appendChild(this.detailsTitle);

    this.detailsText = document.createElement('p');
    this.detailsText.textContent = '';
    this.details.appendChild(this.detailsText);

    this.participants = document.createElement('div');
    this.participants.classList.add('participants'); // Add class for styling

    this.participantsTitle = document.createElement('h2');
    this.participantsTitle.textContent = 'Participants';
    this.participantsTitle.classList.add('centered-title'); // Add class for styling
    this.participants.appendChild(this.participantsTitle);

    this.participantsList = document.createElement('ul');
    this.participantsList.classList.add('participants-list'); // Add class for styling

    this.participantsData = [{
        name: 'Jean',
        username: '@jean',
        }, {
        name: 'Paul',
        username: '@paul',
        },
    ];

    this.displayParticipants();


    this.participants.appendChild(this.participantsList);

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
  }

  displayParticipants(){
    this.participantsData.forEach((participant, index) => {
      let listItem = document.createElement('li');
      listItem.classList.add('participant-item'); // Add class for styling

      let img = document.createElement('img');
      img.src = `./userImage/participant${index + 1}.png`; // Assuming images are named participant1.jpg, participant2.jpg, etc.
      img.classList.add('participant-image'); // Add class for styling

      let nameContainer = document.createElement('div');
      nameContainer.classList.add('name-container'); // Add class for styling

      let name = document.createElement('span');
      name.textContent = participant.name;
      name.classList.add('participant-name'); // Add class for styling

      let username = document.createElement('span');
      username.textContent = participant.username;
      username.classList.add('participant-username'); // Add class for styling

      nameContainer.appendChild(name);
      nameContainer.appendChild(username);

      // Create the three dots element
      let dots = document.createElement('span');
      dots.textContent = '...';
      dots.classList.add('dots'); // Add class for styling

      listItem.appendChild(img);
      listItem.appendChild(nameContainer); // Append the name container
      listItem.appendChild(dots); // Append the dots to the participant item
      this.participantsList.appendChild(listItem);
    });
  }
}