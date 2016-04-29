module.exports = {

bitterPost: [
    '<div class="tweet-post">',
    '<div class="tweet-left">',
    '<img class="avatar col-xs-6" src="<%= avatar %>">',
    '<div class="tagline"><span class="name"><%= name %></span> <%= username %> · <%= date %></div>',
    '<p class="post"><%= post %></p>',
    '</div>',
    '<div class="tweet-right">',
    '<i class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#<%= id %>"></i>',
    '<i class="icon-tags delete glyphicon glyphicon-trash"></i>',
    '</div>',
    '<div id="<%= id %>" class="modal fade" role="dialog">',
      '<div class="modal-dialog">',
        '<div class="modal-content">',
          '<div class="modal-body edit-tweet">',
          '<h4 class="modal-title">Edit Tweet</h4>',
          '<textarea name="post" placeholder="<%= post %>" rows="4" cols="40"></textarea>',
          '<button type="button" class="btn btn-default edit" data-dismiss="modal">Save</button>',
          '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',
    '</div>'
].join(''),

newBitterForm: [
  '<div class="new-tweet">',
    '<form>',
    '<textarea name="post" placeholder="What\'s happening?" rows="4" cols="40"></textarea>',
    '<button type="button" class="submitTwit btn tweet-btn btn-info" data-toggle="modal" data-target="#myModal"><img class="feather" src="feather-icon.png" alt="">Tweet</button>',
    '</form>',
  '</div>'
].join('')
}
