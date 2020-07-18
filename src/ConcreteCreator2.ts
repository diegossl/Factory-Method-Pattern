import Creator from './Creator'
import Product from './Product'
import ConcreteProduct2 from './ConcreteProduct2'

class ConcreteCreator2 extends Creator {
  public factoryMethod (): Product {
    return new ConcreteProduct2()
  }
}

export default ConcreteCreator2