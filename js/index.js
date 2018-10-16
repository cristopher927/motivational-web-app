var quotes = [
	'\"If you can dream it, you can do it.\" - Walt Disney',
	'\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt',
	'\"Aim for the moon. If you miss, you may hit a star.\" - W. Clement Stone',
	'\" Don\'t watch the clock; do what it does. Keep going.\" - Sam Levenson',
	'\"Keep your eyes on the stars, and your feet on the ground.\" - Theodore Roosevelt',
	'\"Change your life today. Don\'t gamble on the future, act now, without delay.\" - Simone de Beauvoir',
	'\"Why should you continue going after your dreams? Because seeing the look on the faces of the people who said you couldn\'t will be priceless.\" - Kevin Ngo',
	'\"Life is 10% what happens to you and 90% how you react to it.\" - Charles R. Swindoll',
	'\"The past cannot be changed. The future is yet in your power.\" - Unknown',
	'\"Your talent is God\'s gift to you. What you do with it is your gift back to God.\" - Leo Buscaglia',
	'\"A creative man is motivated by the desire to achieve, not by the desire to beat others.\" - Ayn Rand',
	'\"It does not matter how slowly you go as long as you do not stop.\" - Confucius',
	'\"Problems are not stop signs, they are guidelines.\" - Robert H. Schuller',
	'\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\" - Thomas A. Edison',
	'\"There is only one corner of the universe you can be certain of improving, and that\'s your own self.\" - Aldous Huxley',
	'\"The master has failed more times than the beginner has ever tried\" - Confucius',
	'\"You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character.\" - Unknown',
	'\"It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.\" - Vince Lombardi',
	'\"We Generate Fears While We Sit. We Overcome Them By Action.\" - Dr. Henry Link',
	'\"The Man Who Has Confidence In Himself Gains The Confidence Of Others.\" - Hasidic Proverb',
	'\"Creativity Is Intelligence Having Fun.\" - Albert Einstein',
	'\"You Are Never Too Old To Set Another Goal Or To Dream A New Dream.\" - C.S. Lewis',
	 '\"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.\" - Michelle Obama',
	 '\"The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.\" - F. Nietzsche'
]

function quoteGenerator() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}