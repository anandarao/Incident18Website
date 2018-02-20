$(function() {

	var modal_html = `
			<div class="modal-content">
		    	<h4>Registration Instructions</h4>
		    	<p>The following choices appear when you click on the <b>Register</b> button</p>
		    	<div class="divider"></div>
		    	<div class="row">
		    		<div class="col s12 m12 l6">
  						<div class="section">
					    	<h5>Events</h5>
					    	<ul class="collection">
      							<li class="collection-item">Select the type (Outstation / NITK) and number of tickets (1 ticket per person)</li>
      							<li class="collection-item">Fill details of the attendees and select the required events (participants can register for multiple events with 1 ticket)</li>
      							<li class="collection-item">Choose add-ons appropriately if accommodation or tickets for Proshows are required</li>
      							<li class="collection-item">Proceed to make the payment (NetBanking / Debit card / Credit card / Wallets)</li>
   		 					</ul> 	
					  	</div>
					</div>
					<div class="col s12 m12 l6">
					  	<div class="section">
					    	<h5>Proshows</h5>
					    	<ul class="collection">
      							<li class="collection-item">Select the proshows and the number of tickets</li>
      							<li class="collection-item">Fill details of the attendees</li>
      							<li class="collection-item">Choose add-ons appropriately if accommodation is required</li>
      							<li class="collection-item">Proceed to make the payment (NetBanking / Debit card / Credit card / Wallets)</li>
   		 					</ul> 	
					  	</div>
		    		</div>
		    	</div>
		    	<div class="divider"></div>
		    	<div class="row">
		    		<div class="col s12 m12 l6">
		    			<div class="divider"></div>
  						<div class="section">
					    	<h5>Highlights</h5>
					    	<ul class="collection">
      							<li class="collection-item">Select the special events like Hogathon and <b>Workshops</b> and the number of tickets</li>
      							<li class="collection-item">Fill details of the attendees</li>
      							<li class="collection-item">Choose add-ons appropriately if accommodation is required</li>
      							<li class="collection-item">Proceed to make the payment (NetBanking / Debit card / Credit card / Wallets)</li>
   		 					</ul>
					  	</div>
					</div>
					<div class="col s12 m12 l6">
					  	<div class="divider"></div>
					  	<div class="section">
					    	<h5>Accomodation</h5>
					    	<ul class="collection">
      							<li class="collection-item">Select the number of days that you need accommodation and fill details of the attendees</li>
      							<li class="collection-item">No add-ons are there in this category</li>
      							<li class="collection-item">Proceed to make the payment (NetBanking / Debit card / Credit card / Wallets)</li>
      							<li class="collection-item"><b> Note that accommodation can be chosen as add-on in Events and Proshows</b></li>
   		 					</ul>
					  	</div>
		    		</div>
		    	</div>
		    	<div class="divider"></div>
		    	<div class="row">
		    		<div class="col s12 m12 l12">
  						<div class="section">
					    	<h5>Notes</h5>
					    	<ul class="collection">
      							<li class="collection-item">NITK students do not need to pay for any events or shows – just present your college ID card!</li>
      							<li class="collection-item">NITK students have to pay for highlights (Hogathon/Workshops)</li>
      							<li class="collection-item">Registration for Gaming Events, Lit Events and Spinshock has to be done on a separate Google Form that can be found on the Events Page (Offline Payment)</li>
      							<li class="collection-item"><b>Refund Policy:</b>
								Students who apply for cancellation before 23:59:59, 28/02/2018 will be refunded for their registration fees</li>
      						</ul> 	
					  	</div>
					</div>
		    	</div>
	    	</div>
	    	<div class="modal-footer">
	    		<a href="https://www.townscript.com/widget/incident-233014" target="_blank" class="waves-effect waves-light btn modal-action modal-close">register</a>
	    	</div>
	`;

	$('#modal1').html(modal_html);

});