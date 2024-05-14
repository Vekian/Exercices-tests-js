import '@testing-library/jest-dom';


function sum(a, b) {
    return a + b;
  }
  
  describe('sum', function () {
    it('adds correctly', () => {
        // verifier que la fonction sum retourne bien la somme de a et b avec a=1 et b=2
    });
  });
  
  function arrayify(input = []) {
    return Array.isArray(input) ? input : [input];
  }
  
  describe('arrayify', () => {
    it('returns an empty array when given nothing', () => {
        //tester que la fonction arrayify retourne bien un tableau vide quand rien n'est passé en paramètre
    });
  
    it('returns the array-ed version of what it is given', () => {
        //tester que la fonction arrayify retourne bien un tableau avec la valeur passée en paramètre avec 'garage404' en paramètre
    });
  
    it('returns the array if it is given an array', () => {
        //tester que la fonction arrayify retourne bien le tableau passé en paramètre avec ['garage404'] en paramètre
    });
  });
  