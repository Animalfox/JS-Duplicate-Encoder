/**
 * Encode a word where each character is replaced by '(' if it appears only once,
 * or ')' if it appears more than once.
 * 
 * @param {string} word - The input word to be encoded.
 * @returns {string} - The encoded string where '(' represents non-duplicated characters
 *                     and ')' represents duplicated characters.
 * @author Animalfox
 * @link https://github.com/Animalfox/JS-Duplicate-Encoder
 */
export default function duplicateEncode(word){
    // Split input word to array with it characters
    const charArr = word.toLowerCase().split('');

    // Encode array by using map function
    const encodedArr = charArr.map(char => {

        // Detect duplication
        const isDuplicate = charArr.filter(l => l == char).length > 1;

        // Return encoded symbol
        return isDuplicate ? ")" : "(";
    });

    // Convert encoded array back into string
    const output = encodedArr.join('');

    return output;
}
