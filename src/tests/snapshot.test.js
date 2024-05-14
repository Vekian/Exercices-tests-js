import '@testing-library/jest-dom';


const FlightService = {
    list() {
      return {
        arrivalDatetime: '2018-06-15T21:00:00',
        departure: 'DUB',
        departureDatetime: '2018-06-15T17:25:00',
        destination: 'WRO',
        flightNumber: 'FR153',
      };
    },
  };
  
  describe('FlightService', () => {
    it('Should return a list of flights', () => {
      //recupérer la liste FlightService.list()
      //Et créer un test snapshot
    });
  });
  
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };
  
  describe('User', () => {
    it('will fail every time', () => {
      //L'id est généré de manière aléatoire, il changera à chaque nouveau test idem pour la date
      //Créer un test snapshot qui failera à chaque fois
    });
  });
  
  const user_2 = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };
  
  describe('User', () => {
    it('will check the matchers and pass', () => {
      //Adapter le test snapshot à l'aide des options disponibles afin de parvenir à valider le test de l'user à chaque fois malgré le changement de l'id et de la date
    });
  });
  
  const user_3 = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: Math.random().toString(36).substring(7),
  };
  
  describe('User', () => {
    it('will check the matchers and pass', () => {
      //Adapter le test snapshot à l'aide des options disponibles afin de parvenir à valider le test de l'user à chaque fois malgré le changement de l'id, de la date et du nom
    });
  });
  