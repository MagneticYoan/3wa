<?php

class Program
{
    public function run(SvgRenderer $renderer)
    {
        // Création et initialisation d'un rectangle.
        $rectangle1 = new Rectangle();
		$rectangle1->setLocation(50, 20);
        $rectangle1->setColor('firebrick');
        $rectangle1->setSize(200, 100);

        $rectangle2 = new Rectangle();
		$rectangle2->setLocation(100, 120);
        $rectangle2->setColor('aquamarine');
        $rectangle2->setSize(200, 100);
        
        $ellipse = new Ellipse();
		$ellipse->setLocation(300, 320);
        $ellipse->setColor('lime');
        $ellipse->setSize(100, 80);
        
        $circle = new Circle();
        $circle->setLocation(200, 420);
        $circle->setColor('orange');
        $circle->setSize(50);
        
        $square = new Square();
		$square->setLocation(100, 200);
        $square->setColor('purple');
        $square->setSize(100);
        
        $triangle = new Triangle();
        $triangle->getPoints(100,200, 150,300, 300, 350);
        $triangle->setColor('yellow');
        
        $text = new Text();
        $text->setLocation(400,520);
        $text->setColor('black');
        $text->setText('Hello');
        
        $text2 = new Text();
        $text2->setColor('navy');
        $text2->setText('This is a text, and it is not right');
        $text2->setRotate(30,10,100);
        $text2->setFontSize('2rem');
        
        $star = new Star();
        $star->setColor('deeppink');
        $star->setSize(10);

        // Ajout des différents objets géométriques au moteur graphique.
        $renderer->addShape($rectangle1);
        $renderer->addShape($rectangle2);
        $renderer->addShape($ellipse);
        $renderer->addShape($circle);
        $renderer->addShape($square);
        $renderer->addShape($triangle);
        $renderer->addShape($text);
        $renderer->addShape($text2);
        $renderer->addShape($star);
        
		// Exécution du moteur graphique.
        $renderer->run();
    }
}