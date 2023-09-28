class AnimalPrimary{
  public falar():string{
    return "Animal faz som"
  }
}

class Cachorro extends AnimalPrimary{
  public falar():string{
    return "cachorro faz som"
  }
}

class Gato extends AnimalPrimary{
  public falar():string{
    return "gato faz som"
  }
}

class Peixe extends AnimalPrimary{
  public falar():string{
    return "peixe faz som"
  }
}

const cachorro1:Cachorro = new Cachorro()
const gato1:Gato = new Gato()
const peixe1:Peixe = new Peixe()

console.log(cachorro1.falar())