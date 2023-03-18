/**
 * Problem: To define skeleton of algorithm in base class and let subclasses to  override the steps.
 * ! Use with care. U can break Liskov's Substitution when override steps of template.
 */


abstract class Template {
    public template() {
        this.stepOne();
        this.stepTwo();
    }
    protected abstract stepOne(): void 
    protected abstract stepTwo(): void
}

class doInOneWay extends Template {
     stepOne(): void {
        console.log('Do first step in one way')
    }
     stepTwo(): void {
        console.log('Do second step in one way')
    }
}


class doInOtherWay extends Template {
    stepOne(): void {
       console.log('Do first step in other way')
   }
    stepTwo(): void {
       console.log('Do second step in other way')
   }
}

const oneWay = new doInOneWay();
const otherWay = new doInOtherWay();

// client code

function perform(template: Template) {
    template.template()
}

perform(oneWay);
perform(otherWay);