    $(function() {
            D.modal._init('#modal');
            $('[wt=tag]').tag();
            $('.link').link('insertDates');
            $('.link .note').moreless(75);
            $('[createStack]').live('click', function() {
              del.showCreateStack();
            });
            $('[saveLink]').live('click', del.showSaveLink);
            $('[shareLink]').live('click', del.showShareModal);
            $('[editLink]').live('click', function(evt) {
              evt.stopPropagation();
              var url = $(this).attr('href');
              del.showEditModal(url);
              return false;
            });
        });