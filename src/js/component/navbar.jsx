import React from "react";

//include images into your bundle

//create your first component
export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" >
			<div class="container-fluid">
				<a class="navbar-brand text-white ms-5" href="#">Start bootstrap</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link active text-white" aria-current="page" href="#"><b>Home</b></a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-light" href="#">About</a>
						</li>
						<li class="nav-item ">
							<a class="nav-link text-light" href="#">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled text-light" aria-disabled="true">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


