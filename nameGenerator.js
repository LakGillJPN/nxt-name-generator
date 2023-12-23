const firstNameGen = (num, gender) => {
 if (num == 1) {
  return gender === 'M' ? 'Dallas' : 'Nix'
 }
 else if (num == 2) {
  return gender === 'M' ? 'Mason' : 'Freya'
 }
 else if (num == 3) {
  return gender === 'M' ? 'Banjo' : 'Loni'
 }
 else if (num == 4) {
  return gender === 'M' ? 'Marcus' : 'Maddison'
 }
 else if (num == 5) {
  return gender === 'M' ? 'Blake' : 'Ali'
 }
 else if (num == 6) {
  return gender === 'M' ? 'Baz' : 'Jewels'
 }
 else if (num == 7) {
  return gender === 'M' ? 'Tez' : 'Oreo'
 }
 else if (num == 8) {
  return gender === 'M' ? 'Mister' : 'Canary'
 }
 else if (num == 9) {
  return gender === 'M' ? 'Scratch' : 'Morgan'
 }
 else if (num == 10) {
  return gender === 'M' ? 'Tranos' : 'Navy'
 }
 else if (num == 11) {
  return gender === 'M' ? 'Gasoline' : 'Risky'
 }
 else if (num == 12) {
  return gender === 'M' ? 'Maths' : 'Gabi'
 }
 else if (num == 13) {
  return gender === 'M' ? 'Boba' : 'Shine'
 }
 else if (num == 14) {
  return gender === 'M' ? 'Ace' : 'Loops'
 }
 else if (num == 15) {
  return gender === 'M' ? 'Bonesaw' : 'Teal'
 }
 else if (num == 16) {
  return gender === 'M' ? 'Geo' : ''
 }
 else {
  return 'Please enter a valid date'
 }
}


console.log(firstNameGen(7, 'M'))
export default firstNameGen

