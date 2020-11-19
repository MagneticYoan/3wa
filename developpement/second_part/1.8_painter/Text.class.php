<?php

class Text extends Shape
{
	protected $text;
	protected $transform;
	protected $fontSize;

	public function __construct()
	{
		// Appelle le constructeur de la classe parent, la classe Shape.
		parent::__construct();

		$this->text = '';
		$this->transform = '';
		$this->fontSize = '1em';
	}

	public function draw(SvgRenderer $renderer)
	{
		// Utilisation de l'objet renderer pour dessiner un text avec ses propriétés.
		$renderer->drawText
		(
			$this->location,
			$this->color,
			$this->opacity,
			$this->text,
			$this->transform,
			$this->fontSize
		);
	}

	public function setText($text)
	{
		$this->text = $text;
	}
	
	public function setRotate($transform)
	{
		$this->transform = $transform;
	}
	
	public function setFontSize($fontSize)
	{
		$this->fontSize = $fontSize;
	}
	
}