package classes;

public class EmojiConverter {
    private String emoji;

    public EmojiConverter() {
    }

    public EmojiConverter(String emoji) {
        this.emoji = emoji;
    }

    public String[] lerEmoji() {
        return new String[] {
            "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
            "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔",
            "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯",
            "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
            "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟"
        };
    }

    public String getEmoji() {
        return emoji;
    }

    public void setEmoji(String emoji) {
        this.emoji = emoji;
    }

    public String toString() {
        return this.emoji;
    }
}