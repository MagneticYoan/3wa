<?php

class Square extends Shape
{
    protected $width;


	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();

		$this->width  = 0;
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un rectangle avec ses propriétés.
		$renderer->drawSquare
		(
			$this->location,
			$this->color,
			$this->opacity,
			$this->width
		);
	}

	public function setSize($width)
	{
		$this->width  = $width;
	}
}