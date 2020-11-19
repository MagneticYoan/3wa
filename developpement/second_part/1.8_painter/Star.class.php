<?php

class Star extends Shape
{

    protected $starSize;


	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();

		$this->starSize = 1;
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un triangle avec ses propriétés.
		$renderer->drawStar
		(
			$this->starSize,
			$this->color,
			$this->opacity
		);
	}

	public function setSize($starSize)
	{
		$this->starSize = $starSize;
	}
}

//<polygon points="10, 1, 4, 20, 20, 7, 1, 7, 18, 20" style="fill:navy"/>