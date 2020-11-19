<?php

class Triangle extends Shape
{

    protected $points;


	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();

		$this->points = [];
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un triangle avec ses propriétés.
		$renderer->drawTriangle
		(
			$this->points,
			$this->color,
			$this->opacity
		);
	}

	public function getPoints($x1, $y1, $x2, $y2, $x3, $y3)
	{
		$this->points[0] = new Point;
		$this->points[0]->moveTo($x1, $x2);
		$this->points[1] = new Point;
		$this->points[1]->moveTo($x2, $y2);
		$this->points[2] = new Point;
		$this->points[2]->moveTo($x3, $y3);
	}
}