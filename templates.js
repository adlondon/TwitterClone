module.exports = {

bitterPost: [
  // '<div class="twitDisplay" data-idx="">',
    '<div class="username"><%= username %></div>',
    '<p class="post"><%= post %></p>',
    '<button class="delete">DELETE</button>',
    '<i class="fa fa-star-o"></i>'
  // '</div>'
].join(''),


newBitterForm: [
  '<div class="twitPost">',
    '<h6>Compose new Twit</h6>',
    '<input type="text" name="username" placeholder="username"/>',
    '<textarea name="post" placeholder="Twit something!" rows="8" cols="40"></textarea>',
    '<input class="submitTwit" type="submit" name="submit" value="submit">',
  '</div>'
].join('')
}
