# DWUF
Dartmouth Women's Ultimate Frisbee Website

# Playout Website Editing Instructions

By Anna "Tech Support" Matusewicz
______________________

## Adding Players to the Roster:
1. Add photos of new players to assets/roster (the main assets folder) using "Put". Make sure all photos are square to ensure the layout (lol) is maintained.
2. Download a copy of the existing index.html file from public_html/
3. Ctrl-f to search the document for `<h2>A Team</h2>` to find the beginning of the roster
4. Add or remove players according to new roster, be sure to include all the following information when adding and removing:

		<div class="tile-cols">
	    		<img src="assets/roster/mae.png" style="width: 100%; height: 100%;position:relative; z-index:1;"/>
	       <div class="hover">
	       	<span class="tile-overlay"> </span>
	        	<div class="tile-secondary-content">
	          	<h3>Mae "Bodkin" Hardebeck</h3>
	          	<p> Captain - 2018</p>
	          	<p>favorite food: corn chowder </p>
	        	</div>
	      </div>      
	 	</div>
5. Keep in mind the path name for photos
6. Consider following the current format with name (including nickname), (captain?) class year, and their blurb. However, if you figure out a new format go ahead and change things as long as it is standardized.
7. Notice that players are grouped into fours by div tags similar to `<div class="tile-div" id="a1" >...</div>` with the id number incrementing every time and using "a" or "b" depending on the team. Maintain this format to ensure the website looks crisp.
8. Finally, feel free to change any of this, hell use it to learn html, this documentation is mainly for ease of continuing with the current format

## Current Season Scheduling: 
1. Download a copy of the existing index.html file from public_html/
2. Ctrl-f to search the document for `CURRENT SEASON` to find the beginning of the scheduling
3. Using `<li>...</li>` tags update Fall, Winter, and Spring with relevent tournaments and scheduling
4. ___FOR THE FUTURE:___ include the practice schedule for the beginning of the year for easy access for new people

## Updating Media:
1. Add photos of media to assets/media2 (the main assets folder) using "Put".
2. Download a copy of the existing index.html file from public_html/
3. Ctrl-f to search the document for `class="portfolio-list"` to find the beginning of the media list
4. Add or remove media, be sure to include all the following information when adding and removing:

		<li>
        	<a href="https://ultiworld.com/2017/06/06/2017-womens-college-player-year-presented-vc-ultimate-nutc/">
        		<img src = "assets/media2/poty.png" alt="LINES"/>
        	</a>
        	<span class="portfolio-title">
        		Women's College Player of the Year: Jaclyn Verzuh '19
        	</span>
        	<span class="cat">
        		2017 &middot; ULTIWORLD &middot; POTY
        	</span>
      	</li>
5. Keep in mind the path name for photos
6. Additionally keep in mind that `2017 &middot; ULTIWORLD &middot; POTY` translates to `2017 · ULTIWORLD · POTY`

## Captain Contact Info:
1. Download a copy of the existing index.html file from public_html/
2. Ctrl-f to search the document for `CONTACT<span` to find the beginning of the contact list
3. Update it accordingly, you're smart you can figure it out

## For Life or Website Questions
Contact:
+ Anna Matusewicz -- Anna.D.Matusewicz.20@dartmouth.edu
+ Moyo Okeremi -- Moyosore.A.Okeremi.19@dartmouth.edu
