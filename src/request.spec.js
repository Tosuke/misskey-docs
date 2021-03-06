module.exports = {
  "/account/name/update": {
    "name": "任意の文字列"
  },
  "/account/url/update": {
    "name": "URLとしてvalidである任意の文字列"
  },
  "/account/avatar/update": {
    "file-id": "ファイルのハッシュ値",
    "trim-x": "トリムの開始X座標(int)"
    "trim-y": "トリムの開始Y座標(int)"
    "trim-w": "トリム横幅(int)"
    "trim-h": "トリム縦幅(int)"
  },
  "/account/banner/update": {
    "file-id": "ファイルのハッシュ値",
    "trim-x": "トリムの開始X座標(int)"
    "trim-y": "トリムの開始Y座標(int)"
    "trim-w": "トリム横幅(int)"
    "trim-h": "トリム縦幅(int)"
  },
  "/account/comment/update": {
    "name": "任意の文字列"
  },
  "/account/location/update": {
    "name": "任意の文字列"
  },
  "/account/tags/update": {
    "name": "タグ,を,カンマ,区切りで,作る"
  },
  "/notifications/timeline": {
    "limit": "取得数(int)(デフォルト = 10)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/notifications/delete-all": {
    // ペイロードなし
  },
  "/notifications/unread/count": {
    // ペイロードなし
  },
  "/users/show": {
    "screen-name": "ユーザーのスクリーンネーム(string)(英数字ID)"
  },
  "/users/follow": {
    "user-id": "ユーザーのID(ハッシュ値)"
  },
  "/users/unfollow": {
    "user-id": "ユーザーのID(ハッシュ値)"
  },
  "/users/following": {
    "user-id": "ユーザーのID(ハッシュ値)",
    "limit": "取得数(int)(デフォルト = 30)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/users/followers": {
    "user-id": "ユーザーのID(ハッシュ値)",
    "limit": "取得数(int)(デフォルト = 30)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/users/recommendations": {
    // ペイロードなし
  },
  "/users/search": {
    // ユーザーの名称・スクリーンネーム両方で探す
    "query": "任意の文字列"
  },
  "/users/search-by-screen-name": {
    // ユーザーのスクリーンネームだけから探す
    "screen-name": "ユーザーのスクリーンネーム(string)(英数のID)"
  },
  "/posts/timeline": {
    "limit": "取得数(int)(デフォルト = 10)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/posts/user-timeline": {
    "user-id": "ユーザーのID(ハッシュ値)",
    "types": ",で区切った取得する投稿の種類 e.g.: 'status, photo, video'",
    "limit": "取得数(int)(デフォルト = 10)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/posts/mentions/show": {
    "limit": "取得数(int)(デフォルト = 10)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/posts/mentions/delete-all": {
    // ペイロードなし
  },
  "/posts/mentions/unread/count": {
    // ペイロードなし
  },
  "/posts/show": {
    "post-id": "投稿のハッシュ値"
  },
  "/posts/talk/show": {
    "post-id": "投稿のハッシュ値",
    "limit": "取得上限値(int)(30)"
  },
  "/posts/replies/show": {
    "post-id": "投稿のハッシュ値",
    "limit": "取得数(int)(デフォルト = 10)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/posts/timeline/unread/count": {
    // ペイロードなし
  },
  "/posts/create": {
    "text": /(.+)/,
    "files": /([0-9a-zA-Z]+(,$|))*/
  },
  "/posts/reply": {
    "text": /(.+)/,
    "in-reply-to-post-id": /([0-9a-zA-Z])+/,
    "files": /([0-9a-zA-Z]+(,$|))*/
  },
  "/posts/repost": {
    "post-id": "投稿のハッシュ値"
  },
  "/posts/like": {
    "post-id": "投稿のハッシュ値"
  },
  "/posts/unlike": {
    "post-id": "投稿のハッシュ値"
  },
  "/posts/search": {
    "query": "任意の文字列",
    "limit": "最大取得数(int)(デフォルト = 20)",
    "since-cursor": "取得開始時の現在位置始点(int)(デフォルト = null)",
    "max-cursor": "取得開始時の現在位置終点(int)(デフォルト = null)"
  },
  "/posts/likes/show": {
    // 未実装
  },
  "/posts/reposts/show": {
    // 未実装
  },
  "/talks/history/show": {
    "type": "'user' || 'limit'",
    "limit": "最大取得数(int)(デフォルト = 30)"
  },
  "/talks/messages/unread/count": {
    // ペイロードなし
  },
  "/talks/messages/say": {
    "text": "任意の文字列",
    "user-id": "送信相手のユーザーID(ハッシュ値)",
    "file": /([0-9a-zA-Z])+/
  },
  "/talks/messages/show": {
    "message-id": "メッセージID(ハッシュ値)"
  },
  "/talks/messages/read": {
    "message-id": "メッセージID(ハッシュ値)"
  },
  "/talks/messages/stream": {
    // 未実装
  },
  "/talks/messages/delete": {
    // 未実装
  },
  "/talks/group/create": {
    // 動いてない
  },
  "/talks/group/show": {
    // 動いてない
  },
  "/talks/group/members/invite": {
    // 動いてない
  },
  "/talks/group/invitations/show": {
    // 動いてない
  },
  "/talks/group/invitations/accept": {
    // 動いてない
  },
  "/talks/group/invitations/decline": {
    // 動いてない
  },
  "/album/files/upload": {
    "file-name": "アップロードされるファイル名（アップロード者のファイルシステム上での名前）",
    "mimetype": "ファイルのMINEタイプ(image/jpeg)",
    "file": "ファイルバイナリ",
    "size": 1234567,
    "folder-id": "属するフォルダのハッシュ値",
    "unconditional": true || false
  },
  "/album/files/show": {
    "file-id": "string"
  },
  "/album/files/list": {
  },
  "/album/files/stream": {
  },
  "/album/files/move": {
  },
  "/album/files/rename": {
  },
  "/album/files/delete": {
  },
  "/album/files/update-tag": {
    // 動いてない
  },
  "/album/files/add-tag": {
    // 動いてない
  },
  "/album/files/remove-tag": {
    // 動いてない
  },
  "/album/files/find-by-tag": {
    // 動いてない
  },
  "/album/folders/create": {
    // 動いてない
  },
  "/album/folders/list": {
    // 動いてない
  },
  "/album/folders/show": {
    // 動いてない
  },
  "/album/folders/move": {
    // 動いてない
  },
  "/album/folders/rename": {
    // 動いてない
  },
  "/album/tags/create": {
    // 動いてない
  },
  "/album/tags/list": {
    // 動いてない
  },
  "/album/tags/recolor": {
    // 動いてない
  },
  "/album/tags/rename": {
    // 動いてない
  },
  "/album/tags/delete": {
    // 動いてない
  },
  "/hashtags/search": {
    "name": "任意の文字列"
  },
  "/hashtags/trend/show": {
    // ペイロードなしで固定で16件とってくる
  }
}
