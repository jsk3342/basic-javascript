# 프로토 타입

자바스크립트는 프로토타입 기반 언어입니다. 클래스 기반 언어에서는 '상속'을 사용하지만 프로토타입 기반 언어에서는 어떤 객체를 원형으로 삼고 이를 복제(참조)함으로써 상속과 비슷한 효과를 얻습니다. 유명한 프로그래밍 언어의 상당수가 클래스 기반인 것에 비교하면 프로토타입은 꽤나 독특한 개념이라 할 수 있습니다. 클래스에 익숙한 많은 개발자들이 자바스크립트를 배척하는 이유로 프로토타입이 어렵고 복잡하다는 점을 들지만, 오히려 제대로 이해하는것만으로도 이미 숙련자 레벨에 도달할 수 있는 시야를 확보하게 되는 셈입니다. 

## 프로토타입 개념 이해

### constructor, prototype, instance
