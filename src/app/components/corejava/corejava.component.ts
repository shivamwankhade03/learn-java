import { Component } from '@angular/core';

@Component({
  selector: 'app-corejava',
  standalone: true,
  imports: [],
  templateUrl: './corejava.component.html',
  styleUrl: './corejava.component.css'
})
export class CorejavaComponent {
 contents: any[] = [
    {
      topic: 'Memory Management',
      urls: [
        'https://dzone.com/articles/java-memory-management',
        'https://www.baeldung.com/java-memory-management-interview-questions',
        'https://www.baeldung.com/java-memory-leaks',
        'https://developers.redhat.com/articles/2021/08/20/stages-and-levels-java-garbage-collection#',
      ],
    },
    {
      topic: 'Class Loaders',
      urls: [
        'https://www.baeldung.com/java-classloaders',
        'https://www.geeksforgeeks.org/classloader-in-java/',
      ],
    },
    {
      topic: 'OOPS Concepts',
      urls: [
        'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
        'https://www.mygreatlearning.com/blog/oops-concepts-in-java/',
      ],
    },
    {
      topic: 'Exception Handling',
      urls: [],
    },
    {
      topic: 'Collections & Generics',
      urls: [],
    },
    {
      topic: 'Multi Threading',
      urls: [],
    },
    {
      topic: 'Executors framework',
      urls: [
        'https://www.baeldung.com/java-executor-service-tutorial',
        'https://medium.com/codex/executorservice-internal-working-in-java-7b286882f54e',
        'https://howtodoinjava.com/java/multi-threading/how-to-use-blockingqueue-and-threadpoolexecutor-in-java/',
      ],
    },
    {
      topic: 'CompletebaleFuture',
      urls: [
        	"https://www.callicoder.com/java-8-completablefuture-tutorial/",
      ],
    },
    {
      topic: 'Understand Serialization, Deserialization and a few magic methods',
      urls: [
        "https://www.geeksforgeeks.org/serialization-in-java/",
"https://dzone.com/articles/java-serialization-magic-methods-and-use-cases"
      ],
    },
    {
      topic: 'Understand a bit about Java Reflection.',
      urls: [
        "https://www.baeldung.com/java-reflection",
"https://www.geeksforgeeks.org/reflection-in-java/"
      ],
    },
    {
      topic: 'Singleton class Implementation',
      urls: [
        "https://www.java67.com/2020/05/5-ways-to-implement-singleton-design.html"
      ],
    },
    {
      topic: 'Ways to break the Singleton ',
      urls: [
        "https://www.geeksforgeeks.org/prevent-singleton-pattern-reflection-serialization-cloning/"
      ],
    },
    {
      topic: 'Enum as a Singleton',
      urls: [
        "https://www.geeksforgeeks.org/advantages-and-disadvantages-of-using-enum-as-singleton-in-java/"
      ],
    },{
      topic: 'Equals and Hashcode contract',
      urls: [
        "https://www.geeksforgeeks.org/equals-hashcode-methods-java/"
      ],
    },{
      topic: 'Cloning and Types of Cloning.',
      urls: [
        "https://www.baeldung.com/cs/deep-vs-shallow-copy"
      ],
    },{
      topic: 'Immutability',
      urls: [
        "https://www.geeksforgeeks.org/create-immutable-class-java/"
      ],
    },{
      topic: 'Comparable and Comparator',
      urls: [
        "https://www.geeksforgeeks.org/comparable-vs-comparator-in-java/",
"https://www.baeldung.com/java-comparator-comparable"
      ],
    },{
      topic: 'Custom object as a key',
      urls: [
        "https://dzone.com/articles/things-to-keep-in-mind-while-using-custom-classes"
      ],
    },
    {
      topic: 'String, String Buffer, and string Builder',
      urls: [
        "https://www.edureka.co/blog/string-vs-stringbuffer-vs-stringbuilder/"
      ],
    },
    {
      topic: 'Java Custom Annotations',
      urls: [
        "https://www.geeksforgeeks.org/how-to-create-your-own-annotations-in-java/"
      ],
    },
  ];
}
