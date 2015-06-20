var module = angular.module('songModule', []);    //Creating an Angular module known to the whole application as 'jhModule', but known locally as 'module'

module.controller('songController', function jhController($scope)
{
    $scope.author = 
    [
        {
            'title': 'Great Ole Tree',
            'subtitle': 'eclectic rock ballad',
			'author': 'Nicolas Roy',
			'description': 'This is a \'hard ballad\' with Spanish influences. This first-person narrative is difficult to describe in a short paragraph, but has been described as rather touching by most who took the time to read the ',
			'source': 'assets/CV_objects/music/Great Ole Tree.mp3',
			'type': 'audio/mp3',
			'has_lyrics': 'false',
			'lyrics_link': 'assets/CV_objects/music/Lyric Sheets/Great Ole Tree.txt'
        },
        {
            'title': 'Sound Mix',
            'subtitle': 'soundtrack mix',
			'author': 'Nicolas Roy',
			'description': 'Patchwork of soundscapes recorded at on a minimal Pro-Tools setup with factory plug-ins. The drums are a VST plugin (Toontrack).',
			'source': 'assets/CV_objects/music/80\'smix.wav',
			'type': 'audio/wav',
			'no_lyrics': 'true',
			'lyrics_link': ''
        },
		{
            'title': 'Betty & I',
            'subtitle': 'heavy rock with a samba twist',
			'author': 'Max',
			'description': 'Recorded in 2004 in a home studio. This was a popular llive song for the band Max.',
			'source': 'assets/CV_objects/music/Betty and I.wav',
			'type': 'audio/wav',
			'no_lyrics': 'true',
			'lyrics_link': ''
        },
		{
            'title': 'La Bestia En Mi',
            'subtitle': 'instrumental spanish rock',
			'author': 'Nicolas Roy for Lu\'e Diaz',
			'description': 'The guy never came back for this one.',
			'source': 'assets/CV_objects/music/La Bestia En Mi.mp3',
			'type': 'audio/mp3',
			'no_lyrics': 'true',
			'lyrics_link': ''
        },
		{
            'title': 'Lifelong Tourists',
            'subtitle': 'pop song',
			'author': 'Nicolas Roy',
			'description': 'The guy never came back for this one.',
			'source': 'assets/CV_objects/music/Lifelong TouristShort.mp3',
			'type': 'audio/mp3',
			'no_lyrics': 'false',
			'lyrics_link': 'assets/CV_objects/music/Lyric Sheets/Lifelong Tourist.txt'
        }
    ]
});