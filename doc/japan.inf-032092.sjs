JAPAN.INF Version 1.2

ELECTRONIC HANDLING OF JAPANESE TEXT

March 20, 1992

Ken R. Lunde (小林 剣)
Adobe Systems Incorporated
1585 Charleston Road
P.O. Box 7900
Mountain View, CA 94039-7900 USA
(415)361-1702 (home)
(415)962-3866 (office)
(415)960-0886 (fax)
lunde@adobe.com

     This document is a description of how Japanese text (i.e., kana and
kanji) is handled electronically, how to send/receive Japanese text using
electronic mail, and how to set up your computer so that it can process
Japanese text. I am absolutely delighted to share this information with
others, and I would appreciate any comments/feedback on its content. Since
some of the information contained within this document changes on a monthly,
even weekly basis, I keep the current copy in electronic form. The current
version of this document will be made available from at least two sources: at
the FTP sites ucdavis.edu (128.120.2.1) and msi.umn.edu (128.101.24.1). It may
also be obtained by contacting me directly using the above electronic mail
address.

[NOTE: This document contains Japanese characters in New-JIS code. If you are
unable to view this document in Japanese even though you are running under a
Japanese environment, there are three possible reasons and remedies: 1) The
"escape" characters were stripped from this document -- use my program called
"repair-jis.c" to fix it (at FTP site ucdavis.edu (128.120.2.1) in the pub/
JIS/C directory); 2) Your software does not interpret New-JIS, so find out
what Japanese code(s) it interprets, then use my jis.c program (at the FTP
site ucdavis.edu (128.120.2.1) in the pub/JIS/C directory) to convert this
document to an appropriate Japanese code for viewing with your software; or 3)
a combination of 1 and 2 above. I have also made Macintosh ports of these
programs, and they are available at the FTP site scslwide.sony.co.jp
(133.138.199.1) as REPAIR-JIS v1.0 and JIS v2.2.]


TABLE OF CONTENTS:
  WHAT'S NEW
  DISCLAIMER
  INTRODUCTION
  PART 0: THE JAPANESE CHARACTER SET
    0.1: ELECTRONIC CHARACTER SETS
      0.1.1: JIS X 0208-1990
      0.1.2: JIS X 0212-1990
      0.1.3: UNICODE/ISO DIS 10646
    0.2: NON-ELECTRONIC CHARACTER SETS
    0.3: JOUYOU KANJI TABLE
  PART 1: 7-BIT JAPANESE CODES (JIS)
    1.1: JIS7
    1.2: JIS8
  PART 2: 8-BIT JAPANESE CODES (SHIFT-JIS & EUC)
    2.1: SHIFT-JIS:
    2.2: EUC (EXTENDED UNIX CODE):
  PART 3: SENDING JAPANESE
    3.1: SENDING JAPANESE UNDER UNIX
    3.2: SENDING JAPANESE UNDER VMS
    3.3: SENDING JAPANESE UNDER COMPUSERVE
    3.4: SENDING JAPANESE UNDER APPLELINK
  PART 4: RECEIVING JAPANESE
    4.1: RECEIVING JAPANESE UNDER VMS
    4.2: RECEIVING JAPANESE UNDER UNIX/COMPUSERVE
  PART 5: JAPANESE CODE CONVERSION
    5.1: PORTABLE PROGRAMS
    5.2: PROGRAMS FOR THE MACINTOSH
    5.3: REPAIRING DAMAGED JIS-ENCODED JAPANESE FILES
    5.4: ALGORITHMS
  PART 6: JAPANESE E-MAIL NETWORKS AND ADDRESSING TEMPLATES
    6.1: JUNET
    6.2: BITNET
    6.3: NIFTYSERVE
    6.4: TWICS
  PART 7: JUNET NEWS
  PART 8: HARDWARE AND SOFTWARE REQUIREMENTS
    8.1: GENERAL MAINFRAMES
    8.2: NeXT
    8.3: UNIX
    8.4: MS-DOS
    8.5: MACINTOSH
    8.6: AMIGA
    8.7: DEDICATED JAPANESE WORD PROCESSORS
    8.8: POSTSCRIPT HANDLING OF JAPANESE
  PART 9: ON-LINE JAPANESE DICTIONARIES
    9.1: MACINTOSH-BASED DICTIONARIES
    9.2: MS-DOS-BASED DICTIONARIES
  A FINAL NOTE
  ACKNOWLEDGMENTS
  BIBLIOGRAPHY
  APPENDIX 1: BITNET NODES IN JAPAN
  APPENDIX 2: JUNET DOMAINS
  APPENDIX 3: JUNET NEWS NEWSGROUPS
  APPENDIX 4: FREEWARE/SHAREWARE SOURCES
  APPENDIX 5: COMMERCIAL SOFTWARE SOURCES


WHAT'S NEW
     This version of JAPAN.INF offers many changes. I essentially did a
complete overhaul of the document (that is why it took so long to be
released). Here is a summary of changes/additions:

  - I renamed the document as "ELECTRONIC HANDLING OF JAPANESE TEXT," which
    seems to be a more appropriate title.
  - I broke down most of the document sections into subsections, and also
    listed these subsections in the TABLE OF CONTENTS.
  - I expanded PART 0 to give a more detailed overview of the various Japanese
    character sets, to include non-electronic ones.
  - I beefed up PART 5 to include more information on Japanese electronic code
    conversion, to include actual algorithms.
  - The information that was previously in PART 7 was put into PART 6.1 (PART
    7 was subsequently deleted). Also, I made some changes to the addressing
    templates used for sending email to JUNET sites. This change was due to
    the shut-down of relay.cs.net.
  - Added a section on NIFTYSERVE (6.3) and TWICS (6.4)
  - Added a section for AMIGA (8.6)
  - Added a section on PostScript handling of Japanese (8.8)
  - I added a section (PART 9) in which I describe several on-line Japanese
    dictionaries.
  - I added to the BIBLIOGRAPHY the locations and phone numbers for three
    Kinokuniya Bookstore locations in the US through which the Japanese books
    may be ordered. I also added a few more references to that section.
  - I added an appendix (APPENDIX 4) in which are listed the sources for all
    the FreeWare and Sharware described in JAPAN.INF. I also added one for
    commercial software (APPENDIX 5).
  - Other minor changes were made throughout the document, such as correcting
    typos, changing the wording of some sentences, adding more information
    under existing sections, etc.


DISCLAIMER
     Although I list my address here at Adobe Systems Incorporated for contact
purposes, Adobe Systems Incorporated does not endorse this document which I
have created, and have continued (and will continue) to update on a regular
basis. This document is a personal endeavor to inform people of how Japanese
can be handled on a variety of platforms.


INTRODUCTION
     Electronic mail has become a very efficient means of communicating both
locally and world-wide. While it is very simple to send text which uses only
the 94 printable ASCII characters, character sets which contains more than
these ASCII characters pose special problems. In this document, I will
describe how Japanese characters are processed electronically on various
platforms, and how these characters can be transmitted using electronic mail.
     This report contains actual Japanese text throughout, so don't be alarmed
if strange sequences of ASCII characters appear. All Japanese contained in
this document is in New-JIS code.


PART 0: THE JAPANESE CHARACTER SET
     The following sections describe the various documents which cover the
standard Japanese characters. All of these documents are available, and
information for ordering can be found in the Bibliography.

0.1: ELECTRONIC CHARACTER SETS
     The following characters sets are encoded electronically, and are able to
be implemented on computers. Note that some have yet to be implemented,
though.

0.1.1: JIS X 0208-1990
     The Japanese character set as described in the document JIS X 0208-1990
specifies 6,879 standard characters; 6,355 kanji in 2 levels (Level 1: 2,965
kanji arranged by pronunciation; Level 2: 3,390 kanji arranged by radical), 86
katakana, 83 hiragana, 10 numerals, 52 Roman characters, 147 symbols, 66
Russian characters, 48 Greek characters, and 32 line elements (for making
charts).
     This standard was first established in 1978, modified for the first time
in 1983 (character position swapping, glyph changes, and four kanji appended
to JIS Level 2), and modified again in 1990 (two kanji were appended to JIS
Level 2). This character set is widely implemented on a variety of platforms.
Encoding methods for JIS X 0208-1990 include Shift-JIS, EUC, and JIS.
     For those of you who wish to generate a file containing all the code
positions for the Japanese character set, please feel free to use my program
called print-jis.c (written in ANSI C). This program outputs the entire 94 by
94 matrix used to encode the characters specified in JIS X 0208-1990. Output
options include kanji code (choice of Shift-JIS, EUC, or JIS) and whether to
wrap lines. I distribute this program in the form of source code, and the
instructions are in its header. You will need to have the appropriate display
software to view the characters generated by this program as only the
electronic codes are generated (see PART 8 for sources of such programs). This
program is available at the FTP site ucdavis.edu (128.120.2.1). I also have a
Macintosh port of this program, called PRINT-JIS v1.1, at the FTP site
scslwide.sony.co.jp (133.138.199.1).

0.1.2: JIS X 0212-1990
     Late in 1990 a supplemental Japanese character standard called JIS X
0212-1990 was published by Japanese Industrial Standards (JIS) which specified
an additional 5,801 kanji, 21 symbols/diacritical marks, and 245 Latin-based
characters with diacritical marks. This means that there are now 12,156
standard kanji in Japanese. However, no machine has yet implemented these new
characters.
     However, there have been discussions as to how one may go about extending
the current encodings to handle these new characters. Incorporating these
characters into JIS encoding seems to be fine as one would simply need to
define a new kanji-in escape sequence (to be explained later) for this
supplementary set of kanji. The current plan does not call for extending the
Shift-JIS encoding (no space left in its code space), but to use EUC instead.
There were three plans to extend EUC to include these additional kanji, and
the one which was the most popular was to simply put these characters into
code set 3 (see the EUC description in PART 2.2)

0.1.3: UNICODE/ISO DIS 10646
     Many of you may have heard about the two competing multi-lingual encoding
standards called Unicode and ISO DIS 10646. Although Volume 1 of The Unicode
Standard has been published, it is Volume 2 which will deal with 20,000+
Chinese characters in Unicode. Also, Unicode and ISO DIS 10646 are going to be
merged into one standard (one plane within ISO DIS 10646 will be reserved for
Unicode). In light of these facts, I will refrain from any description at this
time, and will wait for the publishing of The Unicode Standard, Volume 2.

0.2: NON-ELECTRONIC CHARACTER SETS
     There are other character sets, all of which played an important role in
establishing JIS X 0208-1990 above. They include the 1850 Toyo Kanji (now the
1945 Joyo Kanji), the 881 Kyoiku Kanji (now the 1006 Gakushu Kanji), and the
284 Jinmei-yo Kanji. Here is their lineage illustrated in a table (note when
some of them became obsolete by being renamed):

                   Year Number   Year Number   Year Number   Year Number
  Toyo Kanji       1946 1850     1981 1945 (Joyo Kanji)
  Kyoiku Kanji     1946 881      1977 996 (Gakushu Kanji)    1992 1006
  Jinmei-yo Kanji  1946 85       1976 112      1981 166      1990 284

It is important to note that Toyo Kanji is obsolete, and has been replaced by
Joyo Kanji, and that Kyoiku Kanji is obsolete, and has been replaced by
Gakushu Kanji. In addition, Gakushu Kanji is a subset of Joyo Kanji (the same
relationship held true for Kyoiku Kanji and Toyo Kanji).
     Here is how these character sets relate to JIS X 0208-1990 (and earlier
versions): All of Joyo Kanji (and Kyoiku Kanji) are included in JIS Level 1
(2965 kanji total) of JIS C 6226-1978. When Joyo Kanji was introduced in 1981,
the additional 95 kanji and subsequent glyph changes forced the creation of
JIS X 0208-1983 (actually, this was first called JIS C 6226-1983, then changed
to the new designation in 1987) -- those extra 95 characters had to be made
part of JIS Level 1 (some were in JIS level 2 already, so some code positions
were swapped). Jinmei-yo Kanji, on the other hand, had to only appear in JIS
Levels 1 or 2, so that is why 4 kanji were appended in 1983, and 2 more in
1990.

0.3: JOUYOU KANJI TABLE
     The 1945 kanji in the Joyo Kanji Table (常用漢字表) are those officially
sanctioned for use in education. These kanji are a subset of JIS X 0208-1990
(actually, a subset of JIS Level 1). Having such a character set in machine-
readable form can be very useful. I am including the table here for such
purposes. This list was created by Professor Richard F. Walters
(rfwalters@ucdavis.edu), and checked/verified by me. If you decide to further
distribute this list, please do so with the three lines of header information
intact. Each line of the list contains 35 kanji.
     I will place a copy of this file at the FTP site ucdavis.edu
(128.120.2.1) in the pub/JIS directory under the filename "jouyou-kanji.txt."
It will be archived there in New-JIS code. The file is as follows:

--- BEGIN ---
MACHINE-READABLE JOUYOU KANJI TABLE
Created by Professor Richard F. Walters (rfwalters@ucdavis.edu)
Checked/Verified by Ken R. Lunde (lunde@adobe.com)

亜哀愛悪握圧扱安暗案以位依偉囲委威尉意慰易為異移維緯胃衣違遺医井域育一
壱逸稲芋印員因姻引飲院陰隠韻右宇羽雨渦浦運雲営影映栄永泳英衛詠鋭液疫益
駅悦謁越閲円園宴延援沿演炎煙猿縁遠鉛塩汚凹央奥往応押横欧殴王翁黄沖億屋
憶乙卸恩温穏音下化仮何価佳加可夏嫁家寡科暇果架歌河火禍稼箇花荷華菓課貨
過蚊我画芽賀雅餓介会解回塊壊快怪悔懐戒拐改械海灰界皆絵開階貝劾外害慨概
涯街該垣嚇各拡格核殻獲確穫覚角較郭閣隔革学岳楽額掛潟割喝括活渇滑褐轄且
株刈乾冠寒刊勘勧巻喚堪完官寛干幹患感慣憾換敢棺款歓汗漢環甘監看管簡緩缶
肝艦観貫還鑑間閑関陥館丸含岸眼岩頑顔願企危喜器基奇寄岐希幾忌揮机旗既期
棋棄機帰気汽祈季紀規記貴起軌輝飢騎鬼偽儀宜戯技擬欺犠疑義議菊吉喫詰却客
脚虐逆丘久休及吸宮弓急救朽求泣球究窮級糾給旧牛去居巨拒拠挙虚許距漁魚享
京供競共凶協叫境峡強恐恭挟教橋況狂狭矯胸脅興郷鏡響驚仰凝暁業局曲極玉勤
均斤琴禁筋緊菌襟謹近金吟銀九句区苦駆具愚虞空偶遇隅屈掘靴繰桑勲君薫訓群
軍郡係傾刑兄啓型契形径恵慶憩掲携敬景渓系経継茎蛍計警軽鶏芸迎鯨劇撃激傑
欠決潔穴結血月件倹健兼券剣圏堅嫌建憲懸検権犬献研絹県肩見謙賢軒遣険顕験
元原厳幻弦減源玄現言限個古呼固孤己庫弧戸故枯湖誇雇顧鼓五互午呉娯後御悟
碁語誤護交侯候光公功効厚口向后坑好孔孝工巧幸広康恒慌抗拘控攻更校構江洪
港溝甲皇硬稿紅絞綱耕考肯航荒行衡講貢購郊酵鉱鋼降項香高剛号合拷豪克刻告
国穀酷黒獄腰骨込今困墾婚恨懇昆根混紺魂佐唆左差査砂詐鎖座債催再最妻宰彩
才採栽歳済災砕祭斎細菜裁載際剤在材罪財坂咲崎作削搾昨策索錯桜冊刷察撮擦
札殺雑皿三傘参山惨散桟産算蚕賛酸暫残仕伺使刺司史嗣四士始姉姿子市師志思
指支施旨枝止死氏祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持
時次滋治璽磁示耳自辞式識軸七執失室湿漆疾質実芝舎写射捨赦斜煮社者謝車遮
蛇邪借勺尺爵酌釈若寂弱主取守手朱殊狩珠種趣酒首儒受寿授樹需囚収周宗就州
修愁拾秀秋終習臭舟衆襲週酬集醜住充十従柔汁渋獣縦重銃叔宿淑祝縮粛塾熟出
術述俊春瞬准循旬殉準潤盾純巡遵順処初所暑庶緒署書諸助叙女序徐除傷償勝匠
升召商唱奨宵将小少尚床彰承抄招掌昇昭晶松沼消渉焼焦照症省硝礁祥称章笑粧
紹肖衝訟証詔詳象賞鐘障上丈乗冗剰城場壌嬢常情条浄状畳蒸譲醸錠嘱飾植殖織
職色触食辱伸信侵唇娠寝審心慎振新森浸深申真神紳臣薪親診身辛進針震人仁刃
尋甚尽迅陣酢図吹垂帥推水炊睡粋衰遂酔錘随髄崇数枢据杉澄寸世瀬畝是制勢姓
征性成政整星晴正清牲生盛精聖声製西誠誓請逝青静斉税隻席惜斥昔析石積籍績
責赤跡切拙接摂折設窃節説雪絶舌仙先千占宣専川戦扇栓泉浅洗染潜旋線繊船薦
践選遷銭銑鮮前善漸然全禅繕塑措疎礎祖租粗素組訴阻僧創双倉喪壮奏層想捜掃
挿操早曹巣槽燥争相窓総草荘葬藻装走送遭霜騒像増憎臓蔵贈造促側則即息束測
足速俗属賊族続卒存孫尊損村他多太堕妥惰打駄体対耐帯待怠態替泰滞胎袋貸退
逮隊代台大第題滝卓宅択拓沢濯託濁諾但達奪脱棚谷丹単嘆担探淡炭短端胆誕鍛
団壇弾断暖段男談値知地恥池痴稚置致遅築畜竹蓄逐秩窒茶嫡着中仲宙忠抽昼柱
注虫衷鋳駐著貯丁兆帳庁弔張彫徴懲挑朝潮町眺聴脹腸調超跳長頂鳥勅直朕沈珍
賃鎮陳津墜追痛通塚漬坪釣亭低停偵貞呈堤定帝底庭廷弟抵提程締艇訂逓邸泥摘
敵滴的笛適哲徹撤迭鉄典天展店添転点伝殿田電吐塗徒斗渡登途都努度土奴怒倒
党冬凍刀唐塔島悼投搭東桃棟盗湯灯当痘等答筒糖統到討謄豆踏逃透陶頭騰闘働
動同堂導洞童胴道銅峠匿得徳特督篤毒独読凸突届屯豚曇鈍内縄南軟難二尼弐肉
日乳入如尿任妊忍認寧猫熱年念燃粘悩濃納能脳農把覇波派破婆馬俳廃拝排敗杯
背肺輩配倍培媒梅買売賠陪伯博拍泊白舶薄迫漠爆縛麦箱肌畑八鉢発髪伐罰抜閥
伴判半反帆搬板版犯班畔繁般藩販範煩頒飯晩番盤蛮卑否妃彼悲扉批披比泌疲皮
碑秘罷肥被費避非飛備尾微美鼻匹必筆姫百俵標氷漂票表評描病秒苗品浜貧賓頻
敏瓶不付夫婦富布府怖扶敷普浮父符腐膚譜負賦赴附侮武舞部封風伏副復幅服福
腹複覆払沸仏物分噴墳憤奮粉紛雰文聞丙併兵塀幣平弊柄並閉陛米壁癖別偏変片
編辺返遍便勉弁保舗捕歩補穂募墓慕暮母簿倣俸包報奉宝峰崩抱放方法泡砲縫胞
芳褒訪豊邦飽乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貿防北僕墨撲朴牧没堀
奔本翻凡盆摩磨魔麻埋妹枚毎幕膜又抹末繭万慢満漫味未魅岬密脈妙民眠務夢無
矛霧婿娘名命明盟迷銘鳴滅免綿面模茂妄毛猛盲網耗木黙目戻問紋門匁夜野矢厄
役約薬訳躍柳愉油癒諭輸唯優勇友幽悠憂有猶由裕誘遊郵雄融夕予余与誉預幼容
庸揚揺擁曜様洋溶用窯羊葉要謡踊陽養抑欲浴翌翼羅裸来頼雷絡落酪乱卵欄濫覧
利吏履理痢裏里離陸律率立略流留硫粒隆竜慮旅虜了僚両寮料涼猟療糧良量陵領
力緑倫厘林臨輪隣塁涙累類令例冷励礼鈴隷零霊麗齢暦歴列劣烈裂廉恋練連錬炉
路露労廊朗楼浪漏老郎六録論和話賄惑枠湾腕
---  END  ---


PART 1: 7-BIT JAPANESE CODES (JIS)
     All of these 7-bit codes share a common character encoding system, but
their kanji-in (KI) and kanji-out (KO) escape sequences differ. We can use
these codes in the US and other countries for electronic mail transmission of
Japanese text, and are the most commonly used in Japan. The names in the
parentheses below are other names for the same code (i.e., New-JIS is also
called JIS). The most common of these codes is New-JIS.

EXAMPLES:
  New-JIS (JIS)
  Old-JIS
  NEC-JIS (NEC Kanji and NEC Code)

Note that for each of the above codes there are two subtypes in existence:
JIS7 and JIS8. JIS7 contains only 7-bit characters, whereas JIS8 may contain
8-bit characters (used only for encoding half-width katakana). This will be
explained in more detail later.
     The KI escape sequence tells Japanese terminals to treat what follows as
two-bytes per character. KO, on the other hand, tells Japanese terminals to
treat what follows as one-byte per character (back to JIS-Roman or ASCII).
This shifting mechanism using escape sequences is central to the processing of
7-bit Japanese codes.
     A two-byte per character encoding system using 7-bit bytes (ASCII) can
encode up to 16,384 characters (128 by 128); however, the Japanese use only
the 94 printable ASCII codes in their matrix, so a maximum of 8,836 characters
(94 by 94) can be encoded.
     The following is a table listing the KI and KO escape sequences for each
of the three codes listed above (note the two varieties of kanji-out).

                    KI         KO (JIS-Roman)  KO (ASCII)
                    ^^         ^^^^^^^^^^^^^^  ^^^^^^^^^^
  New-JIS  (1983)   <ESC> $ B  <ESC> ( J       <ESC> ( B
  Old-JIS  (1978)   <ESC> $ @  <ESC> ( J       <ESC> ( B
  NEC-JIS  (1978)   <ESC> K    <ESC> H         n/a

     The difference between KO (JIS-Roman) and KO (ASCII) is very minor (in
the 7-bit portion), and lies in only two characters. Their 8-bit extension do,
however, differ greatly. The 8-bit extension of the JIS-Roman character set
contains half-width katakana characters. Also, most terminal software can
emulate only one of the KO character sets no matter which one it receives. For
example, NinjaTerm (to be described in PART 8.5) will emulate KO (ASCII) even
if KO (JIS-Roman) is received.
     The differences between New-JIS (1983) and Old-JIS (1978) can be
described by three types:

  Type 1: The shape in the original code position simplified, and the
          unsimplified shape was given a new code position at the end of JIS
          Level 2 (four characters added).

  Original Code     Added Code       |   Original Code     Added Code
  2238 (3646) 尭    8401 (7421) 堯   |   4558 (4D5A) 遥    8403 (7423) 遙
  4374 (4B6A) 槙    8402 (7422) 槇   |   6486 (6076) 瑶    8404 (7424) 瑤

  Type 2: Simplified/unsimplified character pairs exchanged code positions
          between JIS Level 1 and JIS Level 2 (22 pairs total). In the case of
          New-JIS, the simplified form is in the JIS Level 1 column, and the
          unsimplified form is in the JIS Level 2 column. In the case of Old-
          JIS, it is simply the reverse.

  JIS Level 1       JIS Level 2      |   JIS Level 1       JIS Level 2
  1619 (3033) 鯵    8245 (724D) 鰺   |   3308 (4128) 賎    7645 (6C4D) 賤
  1809 (3229) 鴬    8284 (7274) 鶯   |   3659 (445B) 壷    5268 (5464) 壺
  1934 (3342) 蛎    7358 (695A) 蠣   |   3755 (4557) 砺    6674 (626A) 礪
  1941 (3349) 撹    5788 (5978) 攪   |   3778 (456E) 梼    5977 (5B6D) 檮
  1986 (3376) 竃    6762 (635E) 竈   |   3783 (4573) 涛    6225 (5E39) 濤
  2035 (3443) 潅    6285 (5E75) 灌   |   3886 (4676) 迩    7778 (6D6E) 邇
  2050 (3452) 諌    7561 (6B5D) 諫   |   3972 (4768) 蝿    7404 (6A24) 蠅
  2359 (375B) 頚    8084 (7074) 頸   |   4116 (4930) 桧    5956 (5B58) 檜
  2560 (395C) 砿    6672 (6268) 礦   |   4389 (4B79) 侭    4854 (5056) 儘
  2841 (3C49) 蕊    7302 (6922) 蘂   |   4489 (4C79) 薮    7314 (692E) 藪
  3157 (3F59) 靭    8055 (7057) 靱   |   4722 (4F36) 篭    6838 (6446) 籠

  Type 3: The shapes of several characters were changed (246 characters
          total).

  I do not list the characters here as there was no exchanging of code
  positions.

The reason for these changes is due to the introduction of Joyo Kanji (常用漢
字) in 1981. Previous to this, the standard in education were the 1850 Toyo
Kanji (当用漢字); Joyo Kanji added an additional 95 kanji to Toyo Kanji
bringing the total to 1945. The JIS standard contains two levels of kanji, and
JIS wanted to be sure that all Joyo Kanji were included within JIS Level 1.
So, in 1983, a new JIS standard was released. In 1990, the JIS standard was
again modified due to the addition of 118 kanji to the Jinmei-yo Kanji (人名用
漢字) list -- two of these 118 kanji were not found in the JIS standard, so
they were appended to the end of JIS Level 2.
     The character set used for NEC-JIS is closest to that of Old-JIS (same
number of kanji, but a few glyph differences).
     There are two types of New-JIS; one based on the 1983 standard, and one
based on the 1990 standard. The only difference between them is that the 1990
standard includes two additional kanji appended to JIS Level 2. For all
practical purposes they can be treated as the same.
     Japanese text is represented as follows. A romanized version is given so
that those who cannot view Japanese text can benefit, too.

  Japanese Text:                   これは日本語の文章です。
  (Romanized):               KO RE HA NI HON GO NO BUN SHOU DE SU .
  Raw JIS (no escape codes)        $3$l$OF|K\8l$NJ8>O$G$9!#
  New-JIS:             [<ESC> $ B] $3$l$OF|K\8l$NJ8>O$G$9!# [<ESC> ( J]
  Old-JIS:             [<ESC> $ @] $3$l$OF|K\8l$NJ8>O$G$9!# [<ESC> ( J]
  NEC-JIS:               [<ESC> K] $3$l$OF|K\8l$NJ8>O$G$9!# [<ESC> H]

Note the correspondence between the ASCII characters and Japanese characters,
namely that two ASCII characters represent one Japanese character; hence,
Japanese characters consist of two bytes. For example, the hiragana symbol for
"RE" (れ) is represented by the two ASCII characters "$" and "l."
     The following paragraph is a sample Japanese text in the New-JIS Japanese
code. If you are using a Japanese terminal, then you can view this Japanese
text on-line using the procedures found in later sections of this report.

  New-JIS: (kanji-in: [<ESC> $ B]; kanji-out: [<ESC> ( J])
　日本語の一文字を七ビットの二バイトのコードで表現する方法には新ＪＩＳ、
旧ＪＩＳ、日電漢字等があります。これらのコードを用いた文章では日本語の前
後に漢字イン、漢字アウトという二つのエスケープ・シーケンスを使用すること
により、その中が日本語であることを示します。

     The above material covers everything except the handling of half-width
katakana. The following two sections share the material already presented, and
will describe additions to the JIS encoding to handle half-width katakana.

1.1: JIS7
     This code is identical to the JIS encoding described above, except that
it allows one to use half-width katakana. It is called JIS7 since all the
characters in such an encoded file have their 8th bits masked (i.e., no 8-bit
characters).
     There are two ways to shift into such a mode. The first type makes use of
the ASCII SI (shift-in) and SO (shift-out) control characters. To begin a
half-width katakana sequence, one must use the SO character, and to end it,
one must use the SI character. Note that the text stream must be in a one-
byte-per-character mode for this to occur. If the text stream is currently in
a KI state, one must send a KO escape sequence before using SO to begin a
half-width katakana character sequence. This method is described in the
document JIS X 0201-1989, and I have seen it used at least once.
     The second method is described in the document JIS X 0202-1984, and is
simply another escape sequence. This means that a document containing 2-byte
Japanese, 1-byte ASCII, and 1-byte (half-width) katakana characters will make
use of three escape sequences, one for shifting into each of the three modes.
The escape sequence for half-width katakana is

  <ESC> ( I

This can be treated as any other type of KO escape sequence. I will call it KO
(Katakana).

1.2: JIS8
     In order to support JIS8, a terminal must be able to handle 8-bit bytes.
To get half-width katakana into the output, you simply insert ASCII decimal
161 through 223 into the kanji-out (i.e., single-byte) portion of the stream.
In short, a JIS8 terminal will behave like a Shift-JIS terminal for half-width
katakana (compare JIS8 half-width katakana code space to that used for Shift-
JIS in PART 2.1).

     The following table lists the code specifications for the 7-bit codes and
their respective escape sequences and shifting characters. This information is
most useful to programmers.

                 DECIMAL            OCTAL              HEXADECIMAL
  Two-byte characters:
    first byte   033-126            041-176            21-7E
    second byte  033-126            041-176            21-7E
  New-JIS (1983):
    kanji-in     027 + 036 + 066    033 + 044 + 102    1B + 24 + 42
    kanji-out    027 + 040 + 074    033 + 050 + 112    1B + 28 + 4A
  Old-JIS (1978):
    kanji-in     027 + 036 + 064    033 + 044 + 100    1B + 24 + 40
    kanji-out    027 + 040 + 074    033 + 050 + 112    1B + 28 + 4A
  NEC-JIS:
    kanji-in     027 + 075          033 + 113          1B + 4B
    kanji-out    027 + 072          033 + 110          1B + 48
  JIS7 half-width katakana:
    first byte   033-095            041-176            21-5F
    shift-out    014                016                0E
    shift-in     015                017                0F
    kanji-out    027 + 040 + 073    033 + 050 + 111    1B + 28 + 49
  JIS8 half-width katakana:
    first byte   161-223            241-337            A1-DF


PART 2: 8-BIT JAPANESE CODES (SHIFT-JIS & EUC)
     These codes cannot be used reliably through electronic mail networks
since 7-bit paths will strip off the 8th bit leaving nothing but garbage.
These codes are used primarily for internal processing of Japanese on various
platforms. For example, the Japanese system software for the Macintosh uses
Shift-JIS code internally. The names in the parentheses below are other names
for the same code (i.e., Shift-JIS is also called MS KANJI).

EXAMPLES:
  Shift-JIS (MS KANJI)
  EUC (AT&T JIS)

2.1: SHIFT-JIS
     The Shift-JIS implementation is quite unlike that of the 7-bit JIS code
as described in PART 1. The two-byte-per-character mode is initiated when a
Japanese terminal receives a byte with a decimal value ranging between 129-159
or 224-239. This byte will subsequently be treated as the first byte of an
expected two-byte sequence. The following byte (the second byte) must be a
byte with a decimal value ranging between 64-252 (but not 127 -- the DEL
character). Note that the first byte's range falls entirely in the extended
ASCII character set -- true 8-bit characters. The second byte does not share
the same limitation, though. Note that Shift-JIS includes half-width katakana.
Historically, this is how Shift-JIS got its name: the encoding for 2-byte
kanji had to *shift* around the code positions for half-width katakana -- the
half-width katakana existed first, and the Japanese wanted backwards
compatibility.
     The following table lists the code specifications for Shift-JIS. Note
that all five types together make up Shift-JIS. This information is most
useful to programmers.

                 DECIMAL            OCTAL              HEXADECIMAL
  TYPE 1:
   first byte    129-159            201-237            81-9F
   second byte   064-158 (not 127)  100-236 (not 177)  40-9E (not 7F)
  TYPE 2:
   first byte    224-239            340-357            E0-EF
   second byte   064-158 (not 127)  100-236 (not 177)  40-9E (not 7F)
  TYPE 3:
   first byte    129-159            201-237            81-9F
   second byte   159-252            237-374            9F-FC
  TYPE 4:
   first byte    224-239            340-357            E0-EF
   second byte   159-252            237-374            9F-FC
  Half-width katakana:
   first byte    161-223            241-337            A1-DF

2.2: EUC (EXTENDED UNIX CODE)
     EUC consists of four code sets, the primary code set (code set 0) which
is the ASCII 7-bit character set, and three supplemental code sets (code sets
1, 2, and 3) which can be specified by the user, and are usually used for non-
Roman characters. Code set 1 includes the characters of JIS X 0208-1990, code
set 2 is used for half-width katakana, and code set 3 is used for user-defined
characters. The following table lists the code specifications for all the code
sets of EUC.

                 DECIMAL            OCTAL              HEXADECIMAL
  Code set 0 (ASCII):
    first byte   033-126            041-176            21-7E
  Code set 1 (JIS X 0208-1990):
    first byte   161-254            241-376            A1-FE
    second byte  161-254            241-376            A1-FE
  Code set 2 (Half-width katakana):
    first byte   142                216                8E
    second byte  161-223            241-337            A1-DF
  Code set 3 (User-defined characters):
    first byte   143                217                8F
    second byte  161-254            241-376            A1-FE
    third byte   161-254            241-376            A1-FE


PART 3: SENDING JAPANESE
          There are different environments under which one can send Japanese
text from their computer to a mainframe computer for subsequent transmission
through electronic mail. Many of these environments are specific to particular
types of mainframe computers or electronic services.

3.1: SENDING JAPANESE UNDER UNIX
     I have some experience in sending Japanese from UNIX mainframe computers.
One method I know of is to upload the Japanese file using a standard file
transfer protocol (like XModem, Kermit, or FTP), then send it as an electronic
mail message. The file's Japanese code can be converted to New- or Old-JIS
either before sending to the UNIX mainframe, or after it is there. One can
also create Japanese text on-line if the appropriate software is installed.

3.2: SENDING JAPANESE UNDER VMS
     VMS Vax machines can use a program which is executed with the command
KANJI at the system prompt ($). This program simply allows the unprintable
ASCII control character <ESC> (escape) to be accepted by VMS Vax machines. The
output of the program is a file which is called OUTPUT.DAT. I can supply the
code to users of VMS Vax machines upon request.

  STEP 1: $ [KANJI<CR>]
          (opens VMS Vax for Japanese input)
  STEP 2: (transfer text from paste buffer or from disk file)
  STEP 3: [<CR>.<CR>]
          (exits 'KANJI' and creates file OUTPUT.DAT)
  STEP 4: $ [EMAIL<CR>]
          (enters electronic mail system)
  STEP 5: EMail> [SEND OUTPUT.DAT<CR>]
          To: [address<CR>]
          Subject: [header<CR>]
          (file named OUTPUT.DAT is sent to the addressee)

     Another (more reliable) method is to use a standard file transfer
protocol to transfer the file to the VMS mainframe. Japanese code conversion
programs can subsequently convert the file's code to one which is more
suitable for transmission by electronic mail. These programs, which can run on
a mainframe or personal computer, are described in PART 5.

3.3: SENDING JAPANESE UNDER COMPUSERVE
     CompuServe users can use an option in the MAIL system which allows one to
upload a file from their personal computer to be sent as an electronic mail
message. Since one cannot run their own programs on CompuServe, the user must
convert their Japanese file to New- or Old-JIS before transferring the file to
CompuServe. Note that the Japanese text won't appear properly in the
CompuServe editor, but is readable if sent -- try to send Japanese text to
yourself as an experiment. One can also upload a file to the PER area
(personal storage area for textfiles).
     Note that CompuServe users can send electronic mail to Internet
addresses, and Internet users can send electronic mail to CompuServe
addresses. CompuServe users must use the following template for sending to an
Internet address:

  Internet address:                     lunde@adobe.com
  Addressing template on CompuServe:    >INTERNET:lunde@adobe.com

Internet users must use the following template for sending to a CompuServe
address:

  CompuServe user ID:                   00000,0000
  Addressing template on the Internet:  00000.0000@compuserve.com

Note the use of the comma in the CompuServe user ID, and the use of the period
in the Internet address. Be aware that the maximum file size which CompuServe
users can receive is 50K. If you send anything larger, it must be segmented.

3.4: SENDING JAPANESE UNDER APPLELINK
     AppleLink, another electronic service, has special email addressing
requirements. For example, if someone on the Internet wishes to send email to
someone on Applelink, the following pattern is used:

  Applelink user ID:                    username
  Addressing template on the Internet:  username@applelink.apple.com

The reverse pattern is as follows:

  Internet address:                     lunde@adobe.com
  Addressing template on AppleLink:     lunde@adobe.com@INTERNET#

Note that "INTERNET#" must be in all caps, and that two "@" characters are
used in the addressing template. Also note that AppleLink users cannot receive
files more than 32K in size (such files should be segmented before sending),
and that they must now pay $0.50 for each message received from the Internet.


PART 4: RECEIVING JAPANESE
     Receiving Japanese text is a bit simpler than sending it as you will find
out below. Whether Japanese text will be displayed on-line depends on whether
your computer and/or communication software has the ability to display
Japanese. The mainframe computer simply stores the electronic codes, and your
computer, acting as a Japanese terminal, will interpret them accordingly.

4.1: RECEIVING JAPANESE UNDER VMS
     There are two methods for viewing Japanese text on VMS mainframe
computers: the first method allows one to view Japanese while in the EMail
subprogram; the second method allows one to view Japanese at the system
prompt.

METHOD 1:

  STEP 1: open message containing Japanese
          (only ASCII characters can appear at this stage)
  STEP 2: EMail> [EXTRACT tt:<CR>]
          (converts message to textfile format and prints it on the screen)
          (Japanese text will now appear on-line)

METHOD 2:

  STEP 1: open message containing Japanese
          (only ASCII characters can appear at this stage)
  STEP 2: EMail> [EXTRACT filename<CR>]
          (converts message to textfile format)
  STEP 3: EMail> [EXIT<CR>]
          (exits electronic mail system)
  STEP 4: $ [TYPE filename.TXT<CR>]
          (Japanese text will appear on-line)

     The reason for this elaborate scheme is due to the VMS Vax mail sub-
system's feature which does not permit control characters (like <ESC>) to
perform their function; they are there, but only appear as a white space. Once
the message is in textfile format, the control characters can function
properly.

4.2: RECEIVING JAPANESE UNDER UNIX/COMPUSERVE
     CompuServe and the UNIX mail system allows escape characters to function
properly, so these users can read Japanese text on-line just like normal
English text as long as their terminal allows Japanese to be displayed.

     For those who must view Japanese text off-line due to hardware/software
limitations, then some sort of file transfer protocol (XModem, Kermit, or FTP)
must be used to get the file to where it can be viewed. If your viewer
requires the file to be in Shift-JIS format, then the programs which are
described in the following part will become important. Step 4 in the above
scheme should be ignored, and should replaced by the downloading of the file
to your computer. CompuServe users will need to save the message as a file in
their PER area, then download it to their computer.


PART 5: JAPANESE CODE CONVERSION
     There are a variety of Japanese code conversion programs available. Some
are portable, and some are specific to a particular platform. I will also talk
about methods for repairing damaged Japanese files (i.e., those files which
were damaged by a mailer -- 8th bit stripped or escape characters removed).

5.1: PORTABLE PROGRAMS
     I have written a program in ANSI C called jis.c which allows a user to
change the Japanese code within a textfile. It can handle Shift-JIS and EUC
(both 8-bit Japanese codes), and all three 7-bit Japanese codes (New-JIS, Old-
JIS, and NEC-JIS). I distribute this program in the form of source code so
that other programmers may benefit from the algorithms used to convert between
the various Japanese codes, and also so that it can be compiled under a
variety of machines. The program has many useful features: improved error
checking, the ability to automatically detect the input file's kanji code,
selective conversion of half-width katakana to their full-width equivalents,
and command-line argument support. The most current version as of this writing
is 2.2. This program (instructions in the header) is available at the FTP site
ucdavis.edu (128.120.2.1) in the pub/JIS/C directory. If you have problems
obtaining this program, please feel free to contact me directly for a copy.
     There also exists a similar program written in C by Mr. Itaru Ichikawa of
Fujitsu (ichikawa@flab.fujitsu.co.jp) called NKF (Network Kanji Filter). It
was written to run under UNIX, but I also heard that an MS-DOS port of the
program exists. This program and its patch (nkf.src and nkf.patch,
respectively) are available at the FTP site ucdavis.edu (128.120.2.1) in the
pub/JIS/C directory.

5.2: PROGRAMS FOR THE MACINTOSH
     For those who wish to convert Japanese files on the Macintosh, there are
three such programs available. One is called MacKc 0.93. It is an application
written by Masato Hirose (hirose@sws.cpd.mei.co.jp). MacKc 0.93 is much like
ASL KConvert (below), but it can *automatically* detect the input file's
Japanese code (it supports Shift-JIS, EUC, 2 types of New-JIS, and 2 types of
Old-JIS), and allows one to rename the output file. It has many other nice
features built-in. It also allows one to modify how lines break. Unlike ASL
KConvert (to be described below), it uses a Finder-like interface. This
program is FreeWare, and is available at the FTP site ftp.tohoku.ac.jp
(130.34.8.9).
     The second is called ASL KConvert 1.0/a3 (in both application and desk
accessory form). This program was written by Hiroo Yamada
(76414.372@compuserve.com). It handles New-JIS (but does not recognize [<ESC>
( B], though), Old-JIS (two types), Shift-JIS, EUC, and another code called
DEC Kanji. This program also allows one to change how lines break, namely by
carriage return, line feed, or a combination of both. This program also is
FreeWare, and is available at the FTP site ucdavis.edu (128.120.2.1).
     The third is a Macintosh port of my jis.c program, called JIS v2.2,
described above. This program, of course, is FreeWare, and includes source
code. It is available at the FTP site scslwide.sony.co.jp (133.138.199.1).

5.3: REPAIRING DAMAGED JIS-ENCODED JAPANESE FILES
     First I will discuss the repair procedure for JIS-encoded (New- or Old-
JIS) files. One might receive Japanese email messages which have had their
escape characters stripped out by unfriendly mailers. This is a very annoying
problem since one usually must throw out the email message, or manually insert
the escape characters. I have written a small program called repair-jis.c
which is able to repair such damaged JIS-encoded files by inserting escape
characters in the proper places. This program is written in ANSI C, and is
available at the FTP site ucdavis.edu (128.120.2.1). The Macintosh port of
this program is available at the FTP site scslwide.sony.co.jp (133.138.199.1).
Note that this only works with files which were encoded in either New- or Old-
JIS, but since these are really the only codes which are used in email
transmission of Japanese, this program should prove to be quite useful and a
time-saver.
     Unfortunately, there is no elegant way of repairing Shift-JIS and EUC
files which have had their 8th bits removed. Manual repair of EUC is not too
difficult as one simply needs to insert whole KI and KO escape sequences (not
just the escape character) around chunks of Japanese text (this transforms it
into JIS-encoded text -- remember that EUC is simply escape sequence-less JIS
with the 8th bit of both bytes turned on). Doing the same for Shift-JIS is
much more difficult, yet possible. I am currently exploring ways to automate
the repair of damaged Shift-JIS and EUC files.

5.4: ALGORITHMS
     It is very important to note that all of the Japanese encoding methods
discussed here are mutually compatible. We can take advantage of this fact to
convert from one encoding to another.
     Here are some things to remember when dealing with the conversion of
these Japanese encoding methods:

1) EUC is simply escape sequence-less JIS encoding with the 8th bit of both
bytes turned on. Besides the obvious handling of escape sequences, one only
has to add decimal 128 to both JIS bytes to convert to EUC. The reverse is
true. Most mailers strip the 8th bits from email messages -- if one sends an
EUC-encoded file through such paths, it turns into escape-sequence-less JIS.

2) Conversion to and from Shift-JIS is more elaborate, and I recommend using
the following conversion algorithms in C. A call to each of these functions
must pass variables for both bytes to be converted, and pointers are used to
return the values back to the calling statement. Again, to convert to and from
Shift-JIS and EUC, I recommend using JIS as the middle ground.

void sjis2jis(int *p1, int *p2)
{
  register unsigned char c1 = *p1;
  register unsigned char c2 = *p2;
  register int adjust = c2 < 159;
  register int rowOffset = c1 < 160 ? 112 : 176;
  register int cellOffset = adjust ? (31 + (c2 > 127)) : 126;

  *p1 = ((c1 - rowOffset) << 1) - adjust;
  *p2 -= cellOffset;
}

void jis2sjis(int *p1, int *p2)
{
  register unsigned char c1 = *p1;
  register unsigned char c2 = *p2;
  register int rowOffset = c1 < 95 ? 112 : 176;
  register int cellOffset = c1 % 2 ? 31 + (c2 > 95) : 126;

  *p1 = ((c1 + 1) >> 1) + rowOffset;
  *p2 = c2 + cellOffset;
}


PART 6: JAPANESE ELECTRONIC MAIL NETWORKS AND ADDRESSING TEMPLATES
     There are two primary electronic mail networks which are used in Japan:
JUNET (Japan UNIX Network) and BITNET (also called CREN). There are other
computer networks in Japan, such as JAIN (Japanese Academic Network), TISN
(Todai International Science Network), WIDE, etc.

6.1: JUNET
     JUNET is by far the most active electronic mail network in Japan. There
are 5 domains within JUNET: AC, GO, OR, AD, and CO. These correspond to
Academic Institution (AC), Government (GO), Organization (OR), Administration
(AD), and Corporation (CO), respectively.
     Each JUNET domain must be specified within the address. For example,
"hokudai", which is in the AC domain, is addressed as "hokudai.ac.jp". The JP
domain, which is JUNET itself, is much simpler; for example, "ntt" would
simply be "ntt.jp". Here is a typical Japanese address as used in JUNET:

  tomita@keio.ac.jp

Note that if you experience problems with transmission to JUNET sites, try
sending the message through a relay. The above message sent through a relay
would look like this:

  tomita%keio.ac.jp@uunet.uu.net

Note the use of "%" and "@" within the address, and that I used "uunet.uu.net"
as the relay. For those who previously used "relay.cs.net" as such a relay,
please note that it no longer exists.

SEE APPENDIX 2 FOR JUNET DOMAINS

6.2: BITNET
     There are currently 93 BITNET nodes in Japan. Besides JUNET and the now
developing Japanese Internet (WIDE), there is still an increasing demand for
membership in BITNET.
     I have experienced problems when sending or receiving Japanese text to
BITNET addresses. Sending to JUNET addresses is much more reliable. The
problem with BITNET lies in the fact that those unprintable ASCII escape
characters are removed far too often. I have, however, found out that escape
codes do survive when sent as network files (network files are not considered
to be electronic mail messages since there is no header; it is simply sending
a file from site to site by electronic means). To send a Japanese network file
to a bitnet host, use the following format:

  SEND/FILE/BINARY/TRANSLATE/PRINTER filename address

/PRINTER is usually required when sending files whose lines are longer than 80
characters. Escape sequences add data to a line although they are invisible
when printed; lines may wrap at unexpected places if this part is omitted from
the command.
     I have noticed that BITNET seems to handle 8-bit codes in electronic mail
messages much better than Internet (or JUNET) does. One simply needs to
experiment with the site they wish to contact.
     BITNET addresses are the same as in the US, namely that the following
addressing template can be used:

  username@jpn*****

Note that Japanese BITNET sites always begin with the three letters "jpn."

SEE APPENDIX 1 FOR BITNET NODES IN JAPAN

6.3: NIFTYSERVE
     Although there is no direct way to send email from the Internet to
NiftyServe (NOTE: most NiftyServe users have CompuServe accounts), a very
popular Japanese Bulletin Board Service (BBS), there exists a gateway between
NiftyServe and CompuServe. CompuServe users can enter GO NIFTY at any ! prompt
to connect to NiftyServe. There are several things to note before doing this:
1) CompuServe charges about $12 per hour on-line costs -- accessing NiftyServe
through this gateway, I am told, increases the charge to about $35 per hour;
and 2) CompuServe requires 7E1 for communications settings -- NiftyServe
requires 8N1 -- this means one must be able to change their communications
settings while still connected. However, I am told that CompuServe supports
the 8N1 setting, but not during the login process, so making the switch in
settings while logged on is not necessary. Also, when you return to CompuServe
from NiftyServe by typing "BYE," CompuServe will no longer recognize your 8N1
settings.

6.4: TWICS
     TWICS is an electronic mail and computer conferencing system based in
Tokyo, Japan. It is operated as a commercial service. TWICS first went online
in 1984, became globally accessible through public packet switched data
networks in 1986, and joined the world of inter-system inter-network email in
1987.
     TWICS is now accessible through direct dialup modems (+81-3-3351-8244 or
+81-3-3351-7905, settings: 300-2400; 8N1) and three different public data
networks (NTT DDX-P: 4401 3612065, NIS TYMNET: 4406 000524, and TYMPAS:
(NISJPN) 524).
     The orientation of TWICS is people and communication, rather than data
and information, and we provide a range of different facilities to support
this: VMS MAIL for email using various tools to exchange through other
protocols like uucp; the PARTICIPATE conferencing system for our public
community and some private groups; the jCaucus conferencing system for our
distributed Meta^Port conferences and some specialized functions; a news
reader for USENET/JUNET newsgroups; three different real-time chat utilities;
and various file transfer protocols.
     The basic price of membership is 3,000 yen per month, with no additional
connect time usage charges. You pay for your own access, through the most
appropriate channel. We have special rates for groups with a single billing
address, and continue to offer free complimentary membership to people outside
Japan who want to join our online community. For more information on TWICS,
please contact them using the information below:

  TWICS Co., Ltd.
  IEC/NichiBei Kaiwa Gakuin
  1-21 Yotsuya, Shinjuku-ku
  Tokyo 160
  JAPAN
  Phone: +81-3-3351-5977; FAX: +81-3-3353-6096
  email: twics@twics.co.jp

To login to TWICS as a guest in order to obtain more information, use the
above modem phone numbers or packet switching network numbers to connect, then
login as a guest by typing GUEST or NEW (no password required).

     I hope to include more such information on accessing Japanese electronic
services in future versions of JAPAN.INF.


PART 7: JUNET NEWS
     JUNET News is the Japanese equivalent to Usenet NEWS. Each newsgroup name
is prefixed with fj, which means "From Japan."
     JUNET News is an information service which contains many newsgroups. It
acts much like a bulletin board in Japan, but is distributed in the United
States using electronic mail (NOTE: not all newsgroups are available in this
electronic mail distribution). The articles posted to JUNET News are in
Japanese, and are encoded in either Old-JIS or New-JIS.
     To subscribe to the JUNET News mailing list, simply send a request to
Hisao Nojima at nojima@nttlab.ntt.jp or to Stanford University at junet-news-
request@russell.stanford.edu. You will then receive a *grab bag* of articles
from one or more of the following newsgroups:

  fj.ai
  fj.books
  fj.comp.oops
  fj.comp.text
  fj.editor.emacs
  fj.followup
  fj.general
  fj.junet
  fj.misc
  fj.rec.animation
  fj.rec.ham
  fj.rec.misc
  fj.soc.misc
  fj.sys.mac
  fj.sys.pc98

     The following is information about alternate methods for receiving JUNET
News articles:

1) With rrn (remote rn), you can read the fj.* newsgroups from your system via
NNTP (Network News Transmission Protocol or some such thing). This is usually
the easiest way; any user can do it, you don't need root-access on your system
to set this up.
     There are also remote news readers that use GNU Emacs. There are also
remote news readers for just about any computer in the known universe out
there; Mac, VAX, I think even PC's.

2) Physically telnet into the NNTP port and interact with the nntp daemon
directly. This can be done but it's not very fun.... A sample session would
look like

  group fj.general
  article
  next
  article
  group fj.kanji

This method is not recommended unless you are desperate.

3) Get a newsfeed of the fj.* newsgroups. This is by far the easiest method.
Although there are about 150 or so fj.* newsgroups, the volume is pretty low
(compared to comp and rec), so if you're not the news administrator at your
site, it may be easy to convince him/her to set up the newsfeed for them. Then
you would be able to read the newsgroups locally on your own machine and post
messages, etc.

4) Jason Molenda (molenda@s1.msi.umn.edu) can have his news system mail you
the articles. You may end up with 200-300 articles per day in your mailbox,
though. I urge you not to ask him to send you several newsgroups as this will
most surely clog mailing systems.

SEE APPENDIX 3 FOR JUNET NEWS NEWSGROUPS


PART 8: HARDWARE AND SOFTWARE REQUIREMENTS
     The basic necessity for sending and receiving Japanese text using
electronic mail is a Japanese terminal. A mainframe computer itself does not
give you the ability to display Japanese text, but only stores the raw code
along with its escape sequences. Below are some suggestions for obtaining a
Japanese terminal. I am sure there are others, and I will incorporate them
into JAPAN.INF once I find them.

8.1: GENERAL MAINFRAMES
     There is an interesting piece of software written by Koichi Yasuoka
(yasuoka@kudpc.kyoto-u.ac.jp) called kbanner2 with which one can display
Japanese on any terminal. It simply uses ASCII symbols to build large Japanese
characters. This program is distributed as source code, and is made into an
executable program by simply typing "make." This software can be obtained from
the FTP site ginkaku.kudpc.kyoto-u.ac.jp (130.54.8.71) as the file
"kbanner2.tar.Z," or by sending a request to ftp@ginkaku.kudpc.kyoto-u.ac.jp
with a "Subject:" line reading "kbanner2" (the uuencoded file then will arrive
in six segments -- join the segments, uudecode, uncompress, and untar). Here
is a sample command line and the resulting output (the contents of
"testfile.txt" is the author's name in Japanese):

  % kbanner -s -5 testfile.txt
         ;         ,,,,,,,,,,,,,,        ;     ,;
   ;'''''''''''';  ;  ',    ,'  ;   ''''';''';;'
   '   ,;       '  ; ,,;,,,,;,, ; ,,,,,,,;,,;,,,,,
  ,,,,,;,,,,,,,,,, ;     ;      ;      ,,''        ,,,,,,,,,,,,,,
     ,;      ,;    ;  ;  ;   ;  ; ,,,''''''';''
    ,;,,,  ,;'     ;  ;  ;   ;  ; ,,,,,,,,,;,,,,,,
       ,;'';,,     ;  ''''''''  ;         ;
   ,,;''     '';,  ;          ,,;       ,,;
  %

The "-s" flag is used to make characters smaller (without it, they are about
twice as big). The "-5" flag indicates the number of columns to use. There is
also an "-l" flag which is for landscape mode.

8.2: NeXT
     Izumi Ohzawa (izumi@violet.berkeley.edu) has set up a mailing list called
"next-nihongo" to exchange information and ideas on using Japanese on the NeXT
platform. If you wish to be added to, or removed from this mailing list, send
an email message to next-nihongo-request@pinoko.berkeley.edu. If you wish to
post an article to the mailing list, use next-nihongo@pinoko.berkeley.edu (DO
NOT send requests to this mailing-list manager).
     The installed user-base of the NeXT computer is still quite small, and
the number of users who are interested in using Japanese on NeXT is even
smaller. This list should help at the initial stage of the development of the
NeXT user community. Additionally, NeXT users should lobby NeXT and Canon (the
NeXT distributor in Asia) to provide the Japanese version of the NeXT OS at a
reasonable cost outside of Japan as soon as possible.
     The Japanese version of the NeXT OS (2.1J) started shipping in Japan in
July, 1991. It appears to offer the best Japanese language environment of all
workstation-class computers. The educational price of the NeXT even compares
favorably with the Macintosh when the cost of a PostScript Japanese printer is
included (and if the OS is offered at a reasonable price).
     The ASCII version of JTeX for the NeXT is available at the FTP site
srawgw.sra.co.jp (133.137.4.3).

8.3: UNIX
     Kterm is used by UNIX, and works under the X Window system. There is also
a Japanese Front-End Processor called Wnn. NEmacs (written by Ken'ichi Handa
of ETL) and nepoch at the FTP site scslwide.sony.co.jp (133.138.199.1) are
Japanese text editors. Some people prefer JSTEVIE. For printing purposes, JTeX
(ASCII and NTT versions) and kanjips are useful.
     Wnn is a Japanese front-end processor which runs under UNIX (a Macintosh
version already exists). The name Wnn comes from the project objective to make
a good Kana-to-Kanji conversion program which can convert "Watashino Namae ha
Nakano desu" into correct Japanese on the first attempt. Wnn version 4.0.3 is
available at the FTP site utsun.s.u-tokyo.ac.jp (133.11.11.11). The following
document (in English) gives an overview of Wnn:

  KABA Software Research Group: Overview of GMW+Wnn System, 2nd IEEE
  Conference on Computer Workstations (1988), pp. 170-177.

     There is a public domain vi-based editor named JSTEVIE which supports
most vi and ex commands, Japanese input, tag stack, etc. It runs mainly on
UNIX and MS-DOS systems, and should be easy to port to other platforms. It is
based on the STEVIE 3.69 sources by Tony Andrews.

Features of JSTEVIE include:
  - Japanese kanji support - works with JIS, EUC, and SJIS codes, and
    with most MS-DOS front-end processors
  - shiftwidth, autowrite, and fepcontrol settings
  - tag stack (cf. Sun's vi) for returning to previous context after using
    :ta or ^[ commands
  - :map, :map!, :ab, :unmap, :unmap!, and :unab are supported
  - uses TERMCAP file for terminal settings

The latest version of JSTEVIE (J1.2) is available at the FTP site utsun.s.u-
tokyo.ac.jp (133.11.11.11). It is also available at the FTP site
mindseye.berkeley.edu (128.32.232.19). Any questions or comments about JSTEVIE
should be sent to its author, Jun Ohta (ohta@src.ricoh.co.jp).
     NEmacs (Nihongo Emacs) is a Japanese language editor based on GNU Emacs.
It runs under a system in which GNU Emacs runs, and is distributed in the form
of patches to GNU Emacs or the previous version of NEmacs. NEmacs can handle
kanji and kana characters in a buffer, and displays them on the screen. File
I/O, interprocess communication, screen display, and keyboard input are all
specially designed for handling Japanese character codes: JIS, Shift-JIS, and
EUC. TAMAGO supplies the Japanese text environment for NEmacs. TAMAGO requires
the kana-to-kanji conversion server Wnn V3.3 or later. The latest version is
TAMAGO Ver.3.0.0. TAMAGO enables one to input Japanese characters, and edit
Japanese text in a NEmacs buffer. By default, Roman characters are used to
input kana, and then the kana are converted into kanji, but you can customize
TAMAGO to accept direct kana or kanji input. TAMAGO also extends NEmacs' text
editing functions for fill/justify and search/replace, or adds new ones to fit
the Japanese writing system. TAMAGO (means "egg" in Japanese) is an
abbreviation of TAKUSAN MATASETE GOMEN NASAI (沢山待たせてごめんなさい),
"sorry to keep you waiting so long." The latest versions of NEmacs and TAMAGO
are available at several FTP sites: clover.ucdavis.edu (128.120.57.1),
june.cs.washington.edu (128.95.1.4), sauna.hut.fi (130.233.192.1),
russell.stanford.edu (36.9.0.9), mtfuji.gw.u-tokyo.ac.jp (128.167.64.2),
utsun.s.u-tokyo.ac.jp (133.11.11.11), and ftp.cs.titech.ac.jp (131.112.16.39).
Any questions or suggestions about NEmacs or TAMAGO should be sent to
nemacs@etl.go.jp or tamago@etl.go.jp, respectively.
     Kanji printing programs are available at the FTP site a.nl.cs.cmu.edu
(128.2.250.143). The kit consists of 3 programs: 1) kanjips - converts a
PostScript program including JIS kanji text into normal PostScript text by
expanding each kanji character into a dot pattern (requires the use of perl --
Mark Edwards' version does not require perl, though); 2) jenscript - converts
plain text including kanji into Postscript Japanese files; and 3) mp -
converts mail/news articles into PostScript Japanese files. Kanjips can handle
many types of Japanese pattern files, such as 1) Pxl/pk files used in JTeX
(jisjka24, etc.); 2) X11 bdf files (k14, k24, etc.); 3) GMW pattern files; and
4) Plain dot-matrix pattern files. Sample usage:

  % jenscript kanjifile | kanjips | lpr -Plw
  -- prints a Japanese textfile

  % show | mp | kanjips | lpr -Plw
  -- prints mail containing Japanese

     Kterm is now available from the following FTP sites: crl.nmsu.edu
(128.123.1.14); expo.lcs.mit.edu (18.30.0.212); kythera.nmsu.edu
(128.123.1.14); and kum.kaist.ac.kr (137.68.1.65). Version 4.1.2 supports
Chinese (GuoBiao (7- and 8-bit), Big5, and Shift-GuoBiao encoding), Japanese
(EUC, Shift-JIS, and JIS encoding), Korean (KS C 5601-1989 Hangul and n-byte
Hangul encoding), ISO 6429 color text sequences, and X11 Compound Text
character set sequences (Not all of the character sets are supported, but the
sequences are recognized). The README file mentions anonymous FTP locations
for Chinese, Japanese, and Korean Hangul BDF fonts. Please send bug reports,
fixes, enhancements, etc. to Mark Leisher at mleisher@nmsu.edu.
     The following is a description of using Japanese on UNIX written by Frank
Sheeran. Some of the material is slightly repeated from above paragraphs,
though. There are several pieces of software that allow use of Japanese at
various levels under UNIX, if you are using X11 windowing environment. If you
are not using X11, you are probably out of luck. In short, X11 allows programs
(i.e., clients) on any Internet computer to be used much like a Macintosh or a
Windows program, right on your screen, with graphics. Xterm is the standard
terminal emulation program. If you know xterm, kterm is the same, only it uses
JIS fonts. It automatically follows shifts between ASCII and JIS formats, and
is fine by itself for reading mail. Many sizes of fonts are available. Since X
terminals usually have big screens and high resolution, a 16-point font is
fine for general use. Kterm also displays Korean and Chinese, if you have the
appropriate Hangul/Hanzi fonts. Kinput captures input, uses Wnn (like a meat
grinder - ASCII in, JIS out) to convert to kanji, then sends the JIS codes on
their merry way. Depending on your task, your X11 system will need:

                     JIS fonts   JTeX   kterm   kinput   Wnn   NEmacs/JSTEVIE
                     ^^^^^^^^^   ^^^^   ^^^^^   ^^^^^^   ^^^   ^^^^^^^^^^^^^^
Viewing:             yes                yes
Printing:                        yes
Terminal emulation:  yes                yes     yes      yes
Editing:             yes                        maybe    yes   yes


8.4: MS-DOS
     There is a program which allows any IBM or clone (USA type) to read (but
not to send) incoming Japanese text. I have tried it, and it works fairly
well. It does require graphics capability, the basic being Hercules. To obtain
a copy, contact Seiichi Nomura (b470ssn@utarlvm1).
     MOKE (Mark's Own Kanji Editor) version 2.1 is a Japanese text editor
written by Mark Edwards (101015.206@compuserve.com). It allows one to create
Japanese text for sending by electronic mail. It can also be used for
displaying Japanese text. I recommend it highly for MS-DOS users; the only
alternative is EW+, which costs $850.00. MOKE 2.1 costs $69.95 plus $5.00 for
shipping and handling (an extra $5.00 shipping for foreign addresses). MOKE
2.1 can be used in conjunction with communication software, such as PROCOMM or
Kermit, for sending/receiving Japanese text. Registered owners of MOKE 2.0 can
upgrade to version 2.1 for $30.00 plus $5.00 shipping (again, an extra $5.00
shipping for foreign addresses). MOKE 2.1 can be ordered from the following
address (specify 3.5" or 5.25" disks):

  KiCompWare
  Attn: J.J.
  1812 N. Erb St.
  Appleton, WI 54911
  USA
  PHONE: 414-832-1222
  BBS: 414-735-6020

In case personal contact with the author is required, his address in Japan is
as follows (NOTE: do not use this address for ordering MOKE 2.1!):

  Mark Edwards
  #405 Konya manshon 4-12-6 Gono kami
  Hamura-cho, Nishitamagun
  Tokyo 190
  JAPAN
  PHONE: 0425-79-3910

A ShareWare version of MOKE (version 1.1) is still available at the FTP site
utsun.s.u-tokyo.ac.jp (133.11.11.11).
     KD (Kanji Driver) is a program written by Izumi Ohzawa
(izumi@violet.berkeley.edu) of University of California-Berkeley. KD is
available at the FTP site mindseye.berkeley.edu (128.32.232.19). KD supports
JIS Levels 1 and 2, and Japanese files may be displayed on-line (one does not
have to download a file for viewing). KD is written in Turbo C and runs on all
graphic adapters. KD, which comes with dmore, can also be used with the Kermit
terminal program.
     There is also a Japanese terminal program called hterm (version 2.6.0.0),
available free for non-military use at the FTP site azabu.tkl.iis.u-
tokyo.ac.jp (130.69.16.7). It is a full-featured terminal program that allows
one to view Japanese on-line using American-made IBM/PC's with EGA or VGA. It
emulates a VT220 terminal. It also contains a program called hemacs, with
which one can read Shift-JIS encoded files up to 800 lines long, and can edit
the file to some degree (no FEP support, though). It comes in a huge package
(500K+), and the source code is available at the same site. I was told that
the hemacs included with this version may be corrupted, and that the one
included with version 2.6.0.-2 is fine, and is available at the FTP site
msdos.archive.umich.edu (141.211.164.153).
     A recent arrival to the MS-DOS world is IBM DOS J5.0/V. It is a Japanese
operating system for MS-DOS computers, and is IBM's answer to KanjiTalk for
the Macintosh. It is similar to KanjiTalk in that its Japanese fonts are
stored in RAM rather than in ROM. This allows non-Japanese MS-DOS machines
(i.e., those sold in the US) to implement Japanese. The following are the
hardware requirements/recommendation for running IBM DOS J5.0/V:

  PS/55, PC/AT compatible, or PS/2
  VGA, XGA or PS/55 display Adaptor
  CPU better than 80286
  1MB RAM or more (4MB recommended)

This operating system retails for 22,000 Yen (or so I have heard). Note that
the Paradise VGA professional and the ProDesignerII VGA cards do not work with
this operating system. There is a public domain version of the keyboard driver
required for IBM DOS J5.0/V if you plan to use a non-Japanese 101 keyboard,
and it is located in the FLEFO (foreign language forum) on CompuServe as the
file called NBCC.ZIP. Japanese documentation describes installation. There are
at least three US sources (all are in California) for IBM DOS J5.0/V. Contact
them for more information on pricing and availability:

  K Electronics (PHONE: 415-346-5964; FAX: 415-346-0764)
  Sprint-Hill Corporation (PHONE: 213-530-3211; FAX: 213-534-2342)
  I/O Software (PHONE: 714-483-5706; FAX: 714-483-5710)

There is a speculation that an XGA version will be introduced sometime in the
near future. CompuServe's FLEFO has a lot of discussion about IBM DOS J5.0/V,
so that it also another resource for additional information.
     A Japanese word processor for MS-DOS machines called Yukara is now
available. There are two versions available: Yukara AT for $520, and
YukaraATmini for $390. They also sell a Japanese communications program called
KanjiComm for $200. For more information, or to request a copy of their free
demo disk, contact Kureo R & D (PHONE: 604-433-7715; FAX: 604-433-3393).
     A Japanese editor called Smart Characters can be obtained from APROPOS
Incorporated (8 Belknap Street, Arlington, MA 02174 USA; PHONE: 617-648-2041).
I hear that it costs about $80.00, and is very similar to MOKE 2.1.
     The latest news I have is on a FreeWare Japanese word processor called
NJStar version 2.0j written by Ni Hongbo (hongbo@csd.unsw.oz.au or
87p0786@csdvax.csd.unsw.edu.au). This program is available at the FTP site
monu6.cc.monash.edu.au (130.194.1.106) in the pub/Nihongo directory as
njsta20j.zip, and will soon be at other FTP sites. This program was originally
designed as a Chinese word processor, but was recently ported to handle
Japanese. It supports New-JIS, Old-JIS, NEC-JIS, and EUC Japanese codes (New-
JIS used by default for saving files, and EUC is used internally), and also
includes romaji-to-kana input with kana-to-kanji conversion. Its interface
includes pull-down menus and mouse support (mouse buttons are user-
configurable), and handles 19-line EGA or 25-line VGA display. It also has
rich editing functions to include multi-file editing, delete/undelete, two-way
fast search, flexible replace, and extensive block manipulations. Other
features include the ability to write and use macros, an auto-save function,
and the ability to create a PCX file for facsimile transmission use 24-dot
Japanese fonts.


8.5: MACINTOSH
     The Macintosh, in my opinion, is probably the best computer you can buy
(at least in the United States) if you wish to use Japanese in the things you
do.

JAPANESE OS (KANJITALK 6.0.7)
     You will need at least 2MB RAM (I suggest getting 4MB if you wish to use
MultiFinder) and a hard disk to make KanjiTalk work properly. Note that
KanjiTalk 6.0.7.1 is now available, but only installs on the new Macintosh
models (Quadras, Powerbooks, etc.). There are three ways to acquire KanjiTalk
in the United States:

1) On the CD-ROM which is included with every issue of "d e v e l o p" from
APDA. A one-year subscription to "d e v e l o p" is $30 (sample issues are
sold for $13 each -- $10 plus $3 shipping). Call 800-545-9364 or send email to
dev.subs@applelink.apple.com. The latest issue includes both KanjiTalk version
6.0.7 and 6.0.7.1.

2) From any of Apple's authorized dealers (listed at the end of this section)
for approximately $400 (this is the only way you will be eligible for future
upgrades).

3) By sending a $25 check (includes 1st Class postage within the United
States) to Twilight Clone, P.O. Box 6669, Silver Spring, MD 20916-6669 USA
requesting KanjiTalk version 6.0.7 (they also handle other International
versions of Macintosh System Software, like Chinese, Korean, etc.).

JAPANESE OS (KANJITALK 6.0.7 + SYSTEM 7)
     There also exist programs which can be used to force KanjiTalk (the
KanjiTalk CDEV and Japanese fonts) to run under System 7. These include
SweetJAM 7.0, ModeNihongo, and GomTalk7 v1.2.1. The former two are commercial
products, and the latter is FreeWare.
     The only information I have on SweetJAM 7.0 is that it costs 39,000 Yen,
and comes with two TrueType Japanese fonts. ModeNihongo costs 18,000 Yen.
     GomTalk7 v1.2.1, written by Masashi Gomyo (74060.1411@compuserve.com), is
an excellent package. Installation requires the KanjiTalk 6.0.7 and System 7
disks. The result is System 7 which has the ability to display and process
Japanese text just like KanjiTalk 6.0.7. I personally use such an environment,
and find it to be more stable than KanjiTalk 6.0.7. GomTalk7 v1.2.1 is
available at the FTP sites sumex-aim.stanford.edu (36.44.0.6),
scslwide.sony.co.jp (133.138.199.1), and ftp.tohoku.ac.jp (130.34.8.9).

JAPANESE COMMUNICATIONS
     NinjaTerm 0.962 is a very popular Japanese communications program written
by Michiharu Ariza of Adobe Systems Japan. It is FreeWare, and available at
the FTP site ucdavis.edu (128.120.2.1). NinjaTerm can send and receive
Japanese text in New-JIS and Old-JIS codes; it also supports Shift-JIS and
EUC.
     A commercial program called EGTalk 2.0 performs very much like NinjaTerm
above, but is commercial software. Version 1.3 costed 38,000 Yen.
     For Macintoshes with TCP/IP, FastPath, GatorBox, etc., NCSA TelnetJ works
fine as a Japanese terminal emulator. This is the Japanese version of NCSA
Telnet. Another program, ASLTelnet 2.3/b2, from the author of ASLEdit+, also
works very well, and can be used for the same purposes. Both of these programs
are available at the FTP site utsun.s.u-tokyo.ac.jp (133.11.11.11). ASLTelnet
2.3/b2 is also available at the FTP site sumex-aim.stanford.edu (36.44.0.6). I
personally use ASLTelnet 2.3/b2.

JAPANESE TEXT PROCESSING
     In order to input (create) Japanese text on a Macintosh, you will need to
be running Japanese system software, namely KanjiTalk (see above). You will
also need a front-end processor (FEP) as well as an editor or word processor.
An FEP is the tool which performs the so-called kana-to-kanji conversion
(captures ASCII input, and turns it into kana and kanji), and an editor or
word processor is simply the "blackboard" on which you write. Be aware that
some blackboards are "smarter" than others (e.g., MicroSoft Word does not
handle Japanese properly, but Nisus performs extremely well).

FRONT-END PROCESSORS
     These are also known as Japanese input engines or kana-kanji conversion
software -- they are simply used to input Japanese text. An FEP called 2.1
HENKAN is included with the KanjiTalk distribution. There are other, more
powerful, FEP's available, some of which are EGBridge 5.1r2, TurboJIP 1.2,
Wnn, Katana 4.0, and MacVJE 2.5. I personally use MacVJE 2.5, and find it very
powerful and flexible. I recommend it highly. The standard retail price for an
FEP is 18,000 Yen, and most can be purchased separate from a specific word
processor. Here is a listing of Japanese word processors, and the FEP which is
bundled with each (NOTE: the FEP's in parentheses are not bundled, but have
support for in-line conversion):

  Solo Writer      EGBridge (MacVJE)
  MacWriteII-J     MacVJE (EGBridge)
  EGWord           EGBridge
  TurboWriter      TurboJIP
  WaltzWord        Katana
  MacWord          MacVJE
  2ByWord          Wnn (EGBridge & MacVJE)

In-line conversion is the term which is used to describe where input and
conversion take place for Japanese text. When in-line conversion is supported,
Japanese input and conversion takes place at the cursor's position; when it is
not supported, such tasks take place in a dedicated window usually appearing
on the bottom part of the screen (or can be placed anywhere the user desires).
Needless to say, the former method is much easier as one's eyes need not shift
positions while typing text.
     There are three programs which force in-line conversion support in
various applications. The first two are written by Hideaki Iimori
(73570.53@compuserve.com), and are called Inline++VJE 1.0.1 and Inline++EGB
1.0. The former forces in-line conversion when using MacVJE in a number of
applications, such as ASLEdit+, YooEdit, Nisus, SoloWriter, Word Perfect,
etc., and any application which uses standard TextEdit routines (i.e., Finder,
TeachText, miniWRITER, etc.). The latter is the same, but is used in
conjunction with EGBridge. The third program is written by Nobuhiro Miyatake
(miyatake@apple.com), and is called VJE InLINE 2.3C. Note that this program
only supports in-line conversion in applications which use standard TextEdit
routines (i.e., Finder, TeachText, miniWRITER, etc.), but also allows one to
access Japanese CD-ROM dictionaries (see PART 9.1). These three programs are
FreeWare, and can be found at the FTP site ftp.tohoku.ac.jp (130.34.8.9). Note
that MacVJE 2.5 has built-in in-line conversion support for applications and
desk accessories that use standard TextEdit routines.

JAPANESE TEXT EDITING
     There is a text editor called miniWRITER 1.71 which handles Japanese
remarkably well. It is a DA (Desk Accessory), so it is accessible everywhere
on the Macintosh. It handles Japanese beautifully, and is ShareWare ($12.00).
It is available at the FTP sites sumex-aim.stanford.edu (36.44.0.6) and
ftp.tohoku.ac.jp (130.34.8.9).
     My favorite Japanese text editor is ASLEdit+ 1.0/a30, written by Hiroo
Yamada (76414.372@compuserve.com). It does not have a word-wrap feature (it
was designed to be an editor for source code). This program comes as a DA and
application. It is available at the FTP sites sumex-aim.stanford.edu
(36.44.0.6) and ftp.tohoku.ac.jp (130.34.8.9), is FreeWare, and has a very
robust search/replace feature.
     The last text editor I would like to mention is YooEdit 0.95 written by
Yooichi Tagawa. Like ASLEdit+ above, it comes as a DA and application, but
incorporates a line-wrapping feature which works best with Japanese, not
English (you see, it splits words randomly at the end of lines). It is
FreeWare, and is available at the FTP site ftp.tohoku.ac.jp (130.34.8.9).

JAPANESE WORD PROCESSING/PAGE LAYOUT
     There are several Japanese word processors for the Macintosh: マックライ
トII-J (MacWriteII-J), EGWord, ワルツワード (WaltzWord), TurboWriter, MacWord,
zeroByWord, ByWord, にばいわーど (2ByWord), and Solo Writer. There are also
Japanese DeskTop Publishing programs for the Macintosh: QuarkXPress 2.0J,
Aldus PageMaker 3.5J, and EGBook. I personally use Solo Writer and PageMaker
3.5J. There are US sources for these programs. Another Japanese word processor
called BlueHawk is due out very soon (actually, long past due). It is very
cheap (3800 Yen!), and will be marketed in Japan by Akiba Pascal (I know of no
US source).
     A localized Japanese version of Nisus (called Solo Writer) was released
in May 1991. Its price in Japan is 68,000 Yen, and in the US is $495.00.
Paragon Concepts, who wrote the program (Mercury Software markets it in
Japan), tells me that registered users of Nisus can purchase Solo Writer for
only $250.00. Paragon Concepts and Mercury Software both offer free demo
disks, for Nisus and Solo Writer, respectively. Paragon Concepts can be
reached by phone at 800-922-2993 or by email at d0405@applelink.apple.com.

JAPANESE FONTS
     KanjiTalk, of course, includes Japanese fonts. There are two basic types
of Japanese fonts: Mincho- (明朝) and Gothic- (ゴシック) style. Included in
the package are PostScript screen fonts (requires the use of the LaserWriterII
NTX-J for PostScript output) and ImageWriterII fonts. The following chart
lists the fonts included with KanjiTalk 6.0.7:

  PostScript Screen: 細明朝体 (Mincho), 等幅明朝 (mono-spaced Mincho), 中
                     ゴシック体(Gothic), 等幅ゴシック (mono-spaced Gothic)
  ImageWriterII:     Kyoto (Mincho), Osaka (Gothic)

Individuals in Japan have also designed their own fonts. All of these are
ImageWriterII fonts, and have special characteristics. They are as follows:

  ASLFont+     9/12-point, Japanese is Osaka, 1-byte Roman font is Monaco,
               included with ASLEdit+ and ASLTelnet, mono-spaced font, good
               utility font
  Tokyo        12/24-point, Japanese is Osaka, 1-byte Roman font is Chicago,
               no half-width katakana support, makes a good System font using
               SystemFontINIT
  Koshigaya    9/12/18/24-point, Japanese is Osaka, 1-byte Roman font is
               Geneva, no half-width katakana support, makes a good
               Application font using SysFontINIT
  Yoshinogari  9/12-point, Japanese is Osaka, 1-byte Roman font is Geneva
  K2!          9/12-point, Japanese is Osaka, Roman is Chicago, makes a good
               System and Application font by using a utility such as
               KTCustomizer at the FTP site ftp.tohoku.ac.jp (130.34.8.9)

I use Tokyo as my System font, Koshigaya as my Application font, and ASLFont+
for most editing purposes. I have placed a file called japan-fonts.hqx at the
FTP sites sumex-aim.stanford.edu (36.44.0.6) and ftp.tohoku.ac.jp
(130.34.8.9). It includes the five Japanese fonts mentioned above (ASLFont+,
Tokyo, Koshigaya, Yoshinogari, and K2!) along with an INIT called SysFontINIT
which requires the use of the Tokyo and Koshigaya fonts. There is also another
FreeWare font package called Shizuoka Font Set, and includes the following
fonts:

  Chiyoda 1.0        12-point, user-selectable Japanese font (default is
                     Osaka), 1-byte Roman font is Chicago (caps are 1 pixel
                     wider), no half-width katakana support, makes a good
                     System font
  Chiyoda-J 1.1      9/12-point, like Chiyoda 1.0 except that it supports
                     half-width katakana
  Chiyoda-J (Osaka)  9/12-point, like Chiyoda-J 1.1 except that the Japanese
                     font is fixed as Osaka
  Sumpu 1.1          9/10/12/14-Point, user-selectable Japanese font, 1-byte
                     Roman font is Geneva, no half-width katakana support,
                     makes a good Application font
  Kutsunoya 1.2      9/12-point, user-selectable Japanese font, 1-byte Roman
                     font is Geneva, supports the special characters as used
                     in ASLFont+, mono-spaced font

The Chiyoda series make excellent System fonts, and are very much like Tokyo
and K2! above. Also included are detailed instruction on how to change the
default Japanese font (ResEdit required). A copy of this font package is
available at the FTP site ucdavis.edu (128.120.2.1).
     Adobe Systems Incorporated has released five downloadable PostScript
Japanese typefaces: FutoMinA101-Bold (bold Mincho), FutoGoB101-Bold (bold
Gothic), Jun101-Light (light rounded Gothic), MidashiMinMA31 (display Mincho),
and MidashiGoMB31 (display Gothic). They are also ATM-J compatible, and cost
99,000 Yen ($755.00 in the US) each (high-resolution versions, namely for 600
dpi and higher printers, are available at 499,000 Yen each). Adobe has also
released the long awaited ATM-J (Japanese version of Adobe Type Manager),
which includes two PostScript Japanese fonts (Ryumin-Light and GothicBBB-
Medium), and costs 40,000 Yen ($295.00 in the US). ATM-J gives one
LaserWriterII NTX-J (PostScript Japanese laser printer) print quality on
printers other than an LaserWriterII NTX-J (even on non-PostScript printers!).
The LaserWriterII NTX-J itself is being marketed in the US and Japan, comes
with Ryumin-Light and GothicBBB-Medium installed on an external hard disk, and
retails for $6300 (the LaserWriterII NTX-J upgrade kit, which includes a
controller board w/4MB RAM, an external 40MB hard disk containing the two
PostScript Japanese fonts, and manuals, retails for $4000). SystemSoft America
distributes Adobe Systems' Japanese software products in the United States.
For more information on Adobe's Japanese products, contact SystemSoft America
at 800-882-8856.

MISCELLANEOUS
     There is a very useful desk accessory for inputting Japanese characters,
especially difficult to input ones (i.e., JIS Level 2 kanji) which is called
区点コード表 2.13 (KUTEN Code Table 2.13). It is written by Takanaga Yamazaki
(71671.231@compuserve.com). I find it a very useful tool. It is available at
the FTP site ucdavis.edu (128.120.2.1).
     For those of you who use KanjiTalk 6.0.7, and are bothered by the default
Japanese ScriptManager setting at startup, there is a CDEV called jBASHING
1.41 which remedies the situation by allowing the user to change the default
script at startup. It is written by Hiro Fujimoto, and is available at the FTP
site ftp.tohoku.ac.jp (130.34.8.9).
     Many of us who aspire to write Japanese well enjoy making use of Japanese
manuscript paper (原稿用紙). There are two programs which can generate such
pages. The first one is written by Jim Loomis (loomis@uts.amdahl.com), and is
called JapanPaper 1.0. It is available at the FTP site sumex-aim.stanford.edu
(36.44.0.6). The second program is actually PostScript language code written
by Mike Rosenlof (rosenlof@milton.u.washington.edu). This file, when
downloaded to any PostScript printer (using Adobe Systems' SendPS or Apple's
LaserWriter Font Utility), will produce Japanese manuscript paper. Here is the
program. Just grab the parts between BEGIN and END:

--- BEGIN ---
%!
%       genkoyoshi   2.1 b91/11/22
%
%   print out paper for writing Japanese
%
%   (c) 1991 Mike Rosenlof
%
%   you may distribute this program freely so long as
%   this header information is intact
%
%   bug reports, questions, ... to rosenlof@milton.u.washington.edu
%   or Mike Rosenlof, 2525 NW Oak Crest Drive, Issaquah, WA 98027 USA
%
%
%       revision history
%
%       21 Nov 1991  complete rewrite of old version
%

%
%       some useful global declarations
%
/inch   { 72 mul } def                         % don't change these!!
/cm     { inch 2.54 div } def
/mm     { inch 25.4 div } def

%
%       define how many copies to print
%
%       if you're paying for the postscript printer by the page
%       it's probably cheaper to use a copier to make more copies than one!
%
/#copies 1 def                                % ok to change

%
%       define the character cell size here
%
/cellheight 10 mm def                         % ok to change
/cellwidth 9 mm def

%
%       define the minimum margin widths
%
%       these values are the minimum values, the margins may be increased
%       to nicely frame the character boxes
%

/topMargin      30 mm def                     % ok to change
/leftMargin     10 mm def
/rightMargin    10 mm def
/bottomMargin   20 mm def

%
%       define the paper size here
%
/pageWidth  8.5 inch def
/pageHeight 11 inch def

%
%-----------------------------------------------------------------------------
%   change code below here at your own risk!!
%-----------------------------------------------------------------------------
%

%
% start to size the drawing area
%
/xmin       leftMargin  def
/xmax       pageWidth rightMargin sub def
/ymin       bottomMargin def
/ymax       pageHeight topMargin sub def

%
%       calculate the number of cells to draw in each direction
%
%   x direction first
%

/xcount
xmax xmin sub  cellwidth 2 div sub   %stack: <max drawing area - cellwidth /2>
cellwidth 1.5 mul  div truncate      %stack: x cell count
def

%
%   and y direction
%

/ycount
ymax ymin sub
cellheight div truncate
def

%
%       calculate the space the number of cells we're going to draw
%       will actually take, and adjust the drawing area to fit exactly
%

/width
cellwidth 1.5 mul xcount mul cellwidth 2 div add
def

/height
cellheight ycount mul
def

xmax xmin sub width sub 2 div           % stack: fudge factor
dup xmin add /xmin exch def
xmax exch sub /xmax exch def

ymax ymin sub height sub 2 div          % stack: fudge factor
dup ymin add /ymin exch def
ymax exch sub /ymax exch def

[2 2] 1 setdash
0 setlinewidth

%
%   draw the vertical lines
%

/xpos
xmin cellwidth 2 div add
def

{
    xpos ymin moveto xpos ymax lineto stroke
    xpos cellwidth add dup ymin moveto ymax lineto stroke

    /ypos
    ymin cellheight add
    def

    {
        xpos ypos moveto  xpos cellwidth add ypos lineto stroke
       
        /ypos
        ypos cellheight add
        def

        ypos ymax cellheight 2 div sub ge { exit } if

    }
    loop       

    /xpos
    xpos cellwidth 1.5 mul add
    def

    xpos xmax cellwidth sub ge { exit } if
}
loop

%
%   go back to solid lines and draw a box around the drawing area
%

[] 0 setdash
1 setlinewidth

xmin ymin 1 sub moveto
xmin ymax 1 add lineto
xmax ymax 1 add lineto
xmax ymin 1 sub lineto
closepath stroke

%
%   draw a line half the width of the drawing area
%   two thirds of the way between the top of page and
%   top of the drawing area

pageWidth 2 div pageHeight dup ymax sub  2 mul 3 div sub moveto
xmax xmin sub 4 div neg 0 rmoveto
xmax xmin sub 2 div 0 rlineto
stroke

showpage

---  END  ---


KANJITALK MAILING LIST
     A mailing list dedicated to KanjiTalk has been established. The primary
language used for communicating is English, but there will be occasional
Japanese text.
     If you are interested in this list, send a message to the following email
address:

  kanjitalk-request@crl.go.jp.

There are several commands which are accepted, all of which must appear on the
"Subject:" line of the message (administration will read any text in the
message body, though):

  append     Adds your name and address to the mailing list.
  list       List members get membership list, others get a help file.
  delete     Removes your name and address from the mailing list.

Articles are then posted by sending them to the following email address:
kanjitalk@crl.go.jp.

SOURCES
     There are two good US sources for commercial Japanese-related products
for the Macintosh:

  Qualitas Trading Company
  2029 Durant Street
  Berkeley, CA 94704
  USA
  PHONE: 510-848-8080
  FAX: 510-848-8009

  Japanese Language Services
  186 Lincoln Street
  Boston, MA 02111
  USA
  PHONE: 617-338-2211
  FAX: 617-338-4611

     The following list contains the authorized Apple dealers which handle
Apple's Japanese products in the US. Unfortunately, I have no phone numbers.

  Connecting Point       Oahu, HI; Maui, HI; and Atlanta, GA
  Computer Attic         Redwood City, CA
  Computer Selection     San Francisco, CA
  AC Computer            Sioux City, IA
  Automated Office       Chicago, IL
  AC3                    Ann Arbor, MI
  Custom Computer        New York, NY
  Graham Computer        Dayton, OH; Indianapolis, IN (2); Louisville, KY;
                         and Cincinnati, OH (2)

     In many cases it is best to purchase Japanese software in Japan. The
following store in Japan offers a 20% or so discount on such software (they
carry just about everything), and will accept facsimile orders from the US
with payment by credit card (VISA and American Express only, and you must send
an enlarged photocopy of your credit card with an order). I recommend them
highly.

  MacSTATION, Inc.
  Palais Royal Rokubancho #702
  6-1 Rokubancho, Chiyoda-ku
  Tokyo 102
  JAPAN
  PHONE: +81-3-5276-7981
  FAX: +81-3-5276-7985

     The most current versions of Japanese FreeWare and ShareWare programs
will be made available at the FTP site scslwide.sony.co.jp (133.138.199.1) in
the ftp2/Mac directory. Another good FTP site is ftp.tohoku.ac.jp (130.34.8.9)
in the pub/mac/system/KanjiTalk and pub/mac/tools/editor directories. Also,
look at the FTP site ucdavis.edu (128.120.2.1) in the pub/JIS directory.

8.6: AMIGA
     ANS (Amiga Nihongo System) version 1.0, produced by SoftHouse Tecnode
(102 Coupo Izumi, 1-4-5 Houya-shi, Izumi-machi, Tokyo 202 JAPAN), and
distributed in Japan by MIQ Japan, Ltd., has been released in Japan. It offers
a Japanese envirnoment for Commodore Amiga users, is compatible with Amiga DOS
2.0 (works fine with version 1.3, too), and requires at least 1MB RAM (more
recommended). ANS features Japanese windows/menus (these replace the English
menus), 12 and 24 dot-matrix Japanese fonts, Jinput/Joutput (both constitute a
Japanese front-end processor), XEDmini (a simple Japanese text editor with
built-in font editor, and can be used as a Japanese terminal), a kana-to-kanji
conversion dictionary for XEDmini and Jinput, Jfilter (for viewing Japanese
files while connected to an MS-DOS console), and utilities for Japanese code
conversion and communication. Note that XEDmini uses pcj (Japanese version of
pcd) for communications, and that one can do binary uploads/downloads while
working on files). I hear that it is reasonably priced, and very easy to use.
I was also told that the next release of ANS will be the Spring of 1992.
     JemTeX is a preprocessor that turns a Japanese text file (i.e., a TeX
file with Japanese text) into a standard (La/Mu)TeX file. The archive (zipped)
comes with the jis2mf utility along with a 24-dot bitmapped kanji font and a
program for generating kanji tables. With jis2mf you can make metafont files
out of the bitmapped font. JemTeX v2.0 will compile on an Amiga using Lattice
C, or on a UNIX machine using gcc. This program is available at the FTP site
utsun.s.u-tokyo.ac.jp (133.11.11.11). JemTeX v2.0 was written by Francois
Jalbert (jalbert@iro.umontreal.ca or jalbert@cs.ubc.ca).

8.7: DEDICATED JAPANESE WORD PROCESSORS
     Many dedicated Japanese word processors are available with built-in
modems, built-in communication software, or both. Thus, they can be an
inexpensive solution for a Japanese terminal.
     I once used an NEC 文豪ミニ7H (BUNGOU mini7H) with a built-in 1200 baud
modem and communication software. I was able to send and receive Japanese text
only in NEC-JIS code, but by using my Japanese code conversion program
described in PART 5.1, I was able to convert incoming codes and convert
outgoing codes to New-JIS (this was done on the mainframe computer to which it
was connected). Other newer dedicated Japanese word processors can handle New-
JIS and other codes. Some of these machines can be purchased for as little as
$500, but only in Japan.
     Be aware that these machines are not computers, have limited memory
capacity, and cannot be serviced in the US. If you use a computer solely as a
word processor, then one of these machines may be an inexpensive alternative.
     Here are a few common features found in the most popular dedicated
Japanese word processors: communication software/modem (sometimes optional or
built-in), MS-DOS file conversion capability, vertical printing capability,
built-in high-resolution thermal printer (400 dpi!), 3.5" floppy disk drive
(s), outline Japanese fonts, and backlit LCD screen. Some models even have
features that rival the best computer-based word processors.
     I have decided not to report on the current state-of-the-art of dedicated
Japanese word processors in JAPAN.INF. Instead, I will recommend to those that
have interest in such machines to obtain the most current edition of SAISHIN
WAAPURO DAI-HYAKKA (最新ワープロ大百科) published by JITSUGYOU-NO NIHONSHA (実
業之日本社). It also includes articles with information that is of concern to
people not necessarily interested in such machines. This publication comes out
four times per year, and can be purchased/ordered through Kinokuniya
bookstores in the US (see BIBLIOGRAPHY for phone numbers). The current cost is
1,600 Yen (Kinokuniya will probably charge approximately $20.00) per issue.

8.8: POSTSCRIPT HANDLING OF JAPANESE
     For those of you who are interested in how Adobe Systems' PostScript
page-description language handles Japanese text, there are several books I 
recommend reading, all of which are listed in the BIBLIOGRAPHY. Adobe Systems
currently has five books available in the English language:

  PostScript Language Reference Manual, 2nd edition (Red Book)
  PostScript Language Tutorial and Cookbook (Blue Book)
  PostScript Language Program Design (Green Book)
  Adobe Type 1 Font Format (Black Book)
  Programming the Display PostScript System with NeXTstep (Purple Book)

The first three books have been translated into Japanese, and are published by
ASCII Corporation in Japan. The Japanese edition of the Blue Book contains an
extra 30 or so pages which describe how Japanese text is handled in
PostScript, and gives many programming examples. I recommend this book to
anyone with an interest in how Japanese is handled in PostScript.
     Here is some additional information for those who are interested in the
PostScript page-description language. There exists an organization called the
Adobe Developer's Association. Its annual membership fee is $195.00, and
benefits include

  Free technical documentation
  Access to the Developer Support phone line
  Discounts on Adobe Systems' application products (50%)
  Discounts of 40-60% off on hardware offered by participating OEMs
    (OEM = Original Equipment Manufacturer)
  Mailings to include new developer tools and other resources
  Access to marketing materials to assist you in showcasing your products
  Automatic receipt of the PostScript Products Catalog, Technical Resources
    Catalog, and updates
  Monthly mailings, including press announcements, product releases, subjects
    of interest, etc.

     There is also an Adobe Connects Mailing List. When one joins (no charge
to join), the following items will be mailed out:

  Technical Resources Catalog and request form (semi-annually)
  Press Releases
  Adobe Connects newsletter
  PostScript Products Catalog

     Also available is a PostScript Language Software Developer's Kit (SDK).
This kit costs $500 to non-members of the Adobe Developer's Association, and
$250 to members. This is what's included:

  PostScript Language Reference Manual, 2nd edition (English)
  Adobe Type 1 Font Format
  PostScript Language Tutorial & Cookbook (English)
  PostScript Language Program Design (English)
  Three Technical Reference Binders:
    Specifications
    Programming Techniques
    Supplemental Documentation
  Adobe Type Manager software for Windows
  Adobe Type Manager software for the Macintosh
  Adobe Garamond Font Packages for the Macintosh and IBM PC
  Adobe Garamond Expert Font Packages for the Macintosh and IBM PC
  Adobe Type Reunion software for the Macintosh
  Macintosh and IBM PC diskettes containing:
    AFM Parser and Files
    Kanji AFM files
    PPD Parser and Files
    Multiple disks filled with code samples
  Collateral and datasheets

     Finally, Adobe Systems has a file server from which anyone can request a
number of files. Such files include documents (PostScript files), program
sources, Adobe Font Metrics (AFM) files, PostScript Printer Description (PPD)
files, etc. To access the file server, send an email message to

  ps-file-server@adobe.com

and include the word "help" in either the Subject field or the message body.
Information on how to use the file server will then be sent to you. If you
have any problems contacting the server, or if you have any suggestions,
please send email to

  ps-file-person@adobe.com

     For more information on the PostScript page-description language, or to
join the Adobe Connects Mailing List or the Adobe Developer's Association,
please contact the Adobe Developer's Association at 415-961-4111.


PART 9: ON-LINE JAPANESE DICTIONARIES
     There are two types of dictionaries which I will describe here: those
which run under the Macintosh environment, and those which run under the MS-
DOS environment. Of course, all these dictionaries will deal with Japanese.

9.1: MACINTOSH-BASED DICTIONARIES
     Macintosh-based dictionaries come in three formats: applications, desk
accessories, and CD-ROM. I will describe each in turn.
     For those who are looking for application-based dictionaries, I suggest
software called KanjiSama. This program is a kanji reference tool covering the
2,965 kanji from JIS Level 1, and includes two dictionaries (general and
technical) containing kanji compounds. KanjiSama costs $149 plus shipping. For
more information, please contact Sanbi Software by phone at 714-352-0276 (this
number is also a FAX), or by mail at Sanbi Software, 3594 Crowell Avenue,
Riverside, CA 92504 USA.
     The rSTONE (from Rosetta Stone) series DA-based dictionaries, produced by
A. I. Technology Corporation, are also excellent references. Japanese-English
(called rSTONE.JE) and English-Japanese (called rSTONE) versions are
available, as is a kanji code dictionary (called rSTONE.KC). These
dictionaries cost $299 each through Qualitas Trading Company (see SOURCES
under PART 8.5). I personally use all three, and find them extremely useful,
especially rSTONE.KC.
     There exist a wide variety of CD-ROM-based dictionaries, and a select few
are accessible through Macintosh software. These dictionaries are designed for
use with Sony's Electronic Book (電子ブック), but some very creative
individuals have found a way to access them through a Macintosh. Here are the
dictionaries, all of which are available on 8cm CD-ROM:

  Koujien (広辞苑)                                            7725 Yen
  Kenkyusha's J-E/E-J Dictionary (研究社新英和・和英中辞典)   6200 Yen
  Gendai Yougo-no Kiso Chishiki (現代用語の基礎知識)          3914 Yen

These CD-ROM dictionaries can be ordered through any Kinokuniya bookstore in
the United States (see BIBLIOGRAPHY for Kinokuniya Bookstore locations and
phone numbers).
     The first program which can perform this task is VJE InLINE 2.3C written
by Nobuhiro Miyatake (miyatake@apple.com), and can access all three
dictionaries. Note, however, that there is no GAIJI support, and that the E-J
portion of the Kenkyusha dictionary cannot be accessed. This program is
FreeWare, and is a Control Panel Device (CDEV). I can send this program upon
request. This program is FreeWare, and can be found at the FTP site
ftp.tohoku.ac.jp (130.34.8.9) in the pub/mac/system/KanjiTalk directory.
     The other two programs are HyperCard stacks. There is one which can
access the Kojien CD-ROM, and another which can access Kenkyusha's J-E/E-J
Dictionary. Both are written by Totsu Sasakibara. I can send one or both of
these programs upon request.

9.2: MS-DOS-BASED DICTIONARIES
     The only Japanese dictionary software I know of which runs under the MS-
DOS environment is made by Professor Jim Breen (jwb@monu6.cc.monash.edu.au).
He has coordinated EDICTJ (a Public Domain Japanese-English dictionary　file),
and has created two useful programs called JDIC and JREADER. These three files
can be obtained at the FTP site monu6.cc.monash.edu.au (130.194.1.106), and
the following is a description of each.
     JDIC (English-Japanese Dictionary Display) provides a English-Japanese
(kana & kanji) display of selected entries of a dictionary file. While it will
work (more or less) with any text file containing a mix of Japanese and
English words, it has been designed specifically to operate on a dictionary in
the "EDICT" format used by the MOKE (Mark's Own Kanji Editor -- see PART 8.4)
Japanese text editor. Its operating environment has been designed to be
similar to MOKE's, and it uses the same environment variables and control file
as MOKE. This program is distributed as a "zoo" archive (jdic15.zoo).
     JREADER (Japanese Text Reader with Online Dictionary Search) provides a
capability to display a text file containing Japanese characters (kana &
kanji) with the option of looking up displayed words in a Japanese-English
dictionary file. It can now look up the yomikata of kanji compounds in MOKE's
kanji->kana files. The Japanese characters can either be in the Shift-JIS,
EUC, New-JIS, or Old-JIS codes. Although JREADER is intended to help non-
Japanese read Japanese language text files, it can also be used by Japanese to
read English text. Its usefulness in this role is limited by the dictionary,
which is more oriented to the Japanese-English mode, and the fact that the
dictionary search cannot cope with things like English's "strong" verbs (swim/
swam/swum, be/am/are, go/went, etc.). JREADER is an extension of the author's
JDIC (Japanese-English Dictionary Display) program, which has been designed
specifically to operate on a dictionary in the "EDICT" format used by the MOKE
(Mark's Own Kanji Editor) Japanese text editor. As with JDIC, JREADER's
operating environment has been designed to be similar to MOKE's, and it uses
the same environment variables and control file as MOKE. This program is
distributed in a "zoo" archive (jdicnn.zoo), and is at version 1.1.
     EDICTJ (Public Domain Japanese-English Dictionary file) is an attempt to
produce a public domain Japanese-English Dictionary in machine-readable form.
It was intended initially for use with MOKE (Mark's Own Kanji Editor) and
related software such as JDIC, however it has the potential to be used in a
large number of packages. At present it is in the "public domain", however
consideration is being given to placing it under Gnu or Copyleft protection,
mainly to prevent the work of its many contributors being exploited by
commercial software developers. EDICTJ is in the "EDICT" format used by MOKE.
It uses EUC coding for kana and kanji, however this can be converted to JIS or
Shift-JIS by any of the several conversion programs around. It is a text file
with one entry per line. The format of entries is:

  KANJI [KANA] /english_1/english_2/.../
  or
  KANA /english_1/.../

EDICTJ consists of: (a) the basic EDICT distributed with MOKE 2.0; (b)
additions by Jim Breen; and (c) additions by others. At over 18,500 entries,
EDICTJ is approaching the size of a good commercial dictionary, which
typically has 20,000+ entries with examples, etc. It is, however, bigger than
some of the smaller dictionaries, and when used in conjunction with a search-
and-display program like JDIC it provides an effective on-line dictionary
service.


A FINAL NOTE
     I hope that the information presented here will prove useful. I would
like to keep the electronic version of this document as up-to-date as
possible, and through readers' input, I am able to do so.
     Most readers should notice that I am very heavy into the Macintosh. If
anyone has information on Japanese interfaces for UNIX, VMS, or any other
machine, please feel free to send me the information, and I will be sure to
include it in the next version of JAPAN.INF. Your name, of course, will be
mentioned in the ACKNOWLEDGMENTS section. Please include sources for the
software/documentation by giving addresses, phone numbers, FTP sites (with
their IP numbers!), etc.
     Please do not hesitate to ask me further question concerning any subject
presented in this text.


ACKNOWLEDGMENTS
     I would like to express my deepest thanks to Kazumasa Utashiro of
Software Research Associates (SRA) for being my teacher (先生) approximately 3
years ago. He taught to me how to send and receive Japanese text using the 7-
bit codes. With his help I was able to write this document in order to inform
others about what he has taught me plus more. To him goes my deepest
gratitude.
     I would also like to express special thanks to Hisao Nojima for
introducing me to the JUNET News mailing list. I read the Japanese articles
every day, and have gained much from them.
     I also wish to thank the countless individuals at the University of
Wisconsin-Madison who offered both moral and financial support in my various
endeavors there which have led me to my present position at Adobe Systems
Incorporated. They include Edward Daub (my son's namesake), R. Byron Bird,
James Davis, Stephen Anderson, Naomi McGloin, Akira Miura, Donald Becker, John
Street, Charles Read, Andrew Sihler, Arthur Chen, and Paul Stevens.
     I would also like to thank the countless people who carefully read
through previous versions of this document in electronic form and offered
numerous suggestions on how to improve it. I would personally like to thank
Eric Bowles, Jim Breen, Shmuel Browns, Rainer Daeschler, Mark Edwards,
Lawrence Garfield, Ron Granich, Michael Henning, Masato Hirose, Ron Hofmann,
Masamichi Honda, Jamie Hubbard, Minoru Huttunen, Peter Lind, Jim Loomis,
Toshiyuki Masui, Jason Molenda, Katsuhiko Momoi, Koichi Mori, Theodore Morris,
Haruhiko Nishida, Seiichi Nomura, Izumi Ohzawa, Yukihiko Okada, Stephen Palm,
Tad Perry, Albert Saisho, Frank Sheeran, Tomonori Shirakawa, Tatsuya Shoji,
Hideo Tomita, Craig Van Degrift, Erik M. van der Poel, and Richard Walters
just to name a few. If I missed anyone, please let me know. I continue to
receive numerous requests for this document from all reaches of the world...


BIBLIOGRAPHY
     The following publications are very useful references for anyone who is
interested in coding methods for Japanese text. Many of the references are in
Japanese, so you should have reading ability in order for them to be useful.
JIS X 0212-1990 and Kazuo Tajima's book are excellent references for the
additional 5,801 kanji standardized in 1990 (Kazuo Tajima was the chairman of
the JIS X 0208-1990 and JIS X 0212-1990 committees).
     The Japanese publications may be difficult to obtain outside of Japan. I
suggest ordering these references through any Kinokuniya bookstore in the US.
Here are the addresses, phone and facsimile numbers for Kinokuniya Bookstore
locations in the US:

NEW JERSEY:
Kinokuniya Bookstores of America, Co., Ltd.
595 River Road
Edgewater, NJ 07020
Phone: 201-941-7580; FAX: 201-941-6087

NEW YORK:
Kinokuniya Bookstores of America, Co., Ltd.
10 West 49th Street
New York, N.Y. 10020
Phone: 212-765-1461; FAX: 212-541-9335

WASHINGTON:
Kinokuniya Bookstores of America, Co., Ltd.
519 Sixth Avenue South
Seattle, WA  98104
Phone: 206-587-2477; FAX: 206-587-0160

CALIFORNIA:
Kinokuniya Bookstores of America, Co., Ltd.
Japan Center
1581 Webster Street
San Francisco, CA 94115-9948
Phone: 415-567-7625/6; FAX: 415-567-4109

Kinokuniya Bookstores of America, Co., Ltd.
Yaohan Supermarket
675 Saratoga Ave
San Jose, CA 95129
Phone: 408-252-1300; FAX: 408-252-2687

Kinokuniya Bookstores of America, Co., Ltd.
665 Paularino Ave.
Costa Mesa, CA 92626
Phone: 714-434-9986; FAX: 714-434-6861

Kinokuniya Bookstores of America, Co., Ltd.
Fashion Island Atrium Court, Suite 315
401 Newport Center Dr.
Newport Beach, CA 92660
Phone: 714-640-1505; FAX: 714-640-7545

Kinokuniya Bookstores of America, Co., Ltd.
2141 W. 182nd St.
Torrance, CA 90504
Phone: 213-327-6577; FAX: 213-327-4395

Kinokuniya Bookstores of America, Co., Ltd.
123 Astronaut Ellison S. Onizuka St., Suite 205
Los Angeles, CA 90012
Phone: 213-687-4480/1; FAX: 213-621-4456

     Note that I have included two lists. One is English/romanized, and the
other is Japanese. The content of both lists is identical except for my paper,
the book on Unicode, and Clews' book. [NOTE: JIS = Japanese Industrial
Standards]

English/Romanized/Translated:
  Adobe Systems Incorporated. 1989. PostScript Language Tutorial and Cookbook.
    ASCII Corporation. 3,090 Yen.
  Adobe Systems Incorporated. 1990. PostScript Language Program Design. ASCII
    Corporation. 3,090 Yen.
  Adobe Systems Incorporated. 1991. PostScript Language Reference Manual. 2nd
    edition. ASCII Corporation. 9,800 Yen.
  Apple Computer Japan. 1990. Macintosh KanjiTalk Technical Reference.
    Gijutsu Hyouron-sha. 2,800 Yen.
  Clews, John. 1988. Language Automation Worldwide: The Development of
    Character Set Standards. Sesame Computer Projects.
  Frey, Donnalyn & Adams, Rick. 1990. !%@:: A Directory of Electronic Mail
    Addressing & Networks. 2nd edition. O'Reilly & Associates, Inc. $27.95.
  Furuse, Yukihiro. 1991. NETTOWAAKU TSUUSHIN KATSUYOU BUKKU. Jistugyou-no
    Nihonsha. 1,500 Yen.
  Furuse, Yukihiro. 1991. SAISHIN WAAPURO YOUGO JITEN. Jistugyou-no Nihonsha.
    1,500 Yen.
  Huang, Jack & Huang, Timothy. 1989. An Introduction to Chinese, Japanese and
    Korean Computing. World Scientific Computing.
  Izumi, Hitoshi. 1988. WAAPURO YOUGO ZUSETSU JITEN. Sankaido. 1,500 Yen.
  JIS. 1984. JIS X 0202-1984 Code Extension Techniques for Use with the Code
    for Information Interchange. 1,600 Yen.
  JIS. 1989. JIS X 0201-1989 Code for Information Interchange. 700 Yen.
  JIS. 1990. JIS X 0208-1990 Code of the Japanese Graphic Character Set for
    Information Interchange. 3,090 Yen.
  JIS. 1990. JIS X 0212-1990 Code of the Supplementary Japanese Graphic
    Character Set for Information Interchange. 3,296 Yen.
  Lunde, Ken R. 1990. Using Electronic Mail as a Medium for Foreign Language
    Study and Instruction. March 1990 issue of CALICO Journal (pp. 68-78).
  Mori, Hirotake. 1986. PASOKON TSUUSHIN GAIDO BUKKU. HBJ Publishing.
    1,236 Yen.
  SAISHIN WAAPURO DAI-HYAKKA. Jistugyou-no Nihonsha. 1,600 Yen.
  Tajima, Kazuo. 1990. SAISHIN JIS KANJI JITEN. Kodansha. 2,300 Yen.
  Uegaki, Tsutomu. 1987. PASOKON WAAPURO KANJI JITEN. Natsumesha. 1,860
    Yen.
  Unicode Consortium, The. 1991. The Unicode Standard: Worldwide Character
    Encoding. Version 1.0, Volume 1. Addison-Wesley. $32.95.
  1987. JOUYOU KANJI HYOU. Ookurashou Insatsu-kyoku. 450 Yen.

Japanese:
  アップルコンピュータジャパン. 1990. 『Macintosh漢字Talkテクニカル・リファ
    レンス』. 技術評論社. 2800円.
  アドビ・システムズ・インコーポレイテッド. 1989. 『PostScriptチュートリアル＆
    クックブック』. アスキー出版局. 3090円.
  アドビ・システムズ・インコーポレイテッド. 1990. 『PostScriptプログラム・デザ
    イン』. アスキー出版局. 3090円.
  アドビ・システムズ・インコーポレイテッド. 1991. 『PostScriptリファレンス・マ
    ニュアル』. アスキー出版局. 9800円.
  古瀬 幸広. 1991. 『ネットワーク通信活用ブック』. 実業之日本社. 1500円.
  古瀬 幸広. 1991. 『最新ワープロ用語辞典』. 実業之日本社. 1500円.
  泉 均. 1988. 『ワープロ用語図説辞典』. 山海堂. 1500円.
  JIS. 1989. JIS X 0201-1989 『情報交換用符号』. 700円.
  JIS. 1984. JIS X 0202-1984 『情報交換用符号の拡張法』. 1600円.
  JIS. 1990. JIS X 0208-1990 『情報交換用漢字符号』. 3090円.
  JIS. 1990. JIS X 0212-1990 『情報交換用漢字符号―補助漢字』. 3296円.
  森 浩孝. 1986. 『パソコン通信ガイドブック』. HBJ Publishing. 1236円.
  田嶋 一夫. 1990. 『最新JIS漢字辞典』. 講談社社. 2300円.
  上柿 力. 1987. 『パソコンワープロ漢字辞典』. ナツメ社. 1860円.
  『最新ワープロ大百科』. 実業之日本社. 1600円.
  1987. 『常用漢字表』. 大蔵省印刷局. 450円.


APPENDIX 1: BITNET NODES IN JAPAN

NODE-ID  routing   name of site                         Network-soft *
=====================================================================
JPN      JPNSUT00  Japan BITNET Association (JaPan N,JP RSCS
JPNAC    GWUVM     Nat Ctr for Sci Info Systems     ,JP UREP  90/04/27
JPNAIST  JPNTSUKU  Agency Of Industrial Sci & Tech C,JP JES2  90/04/27
JPNAIT01 JPNNUCBA  Aichi Institute of Tech          ,JP RSCS  90/04/24
JPNARUTO JPNNME    Naruto Univ of Education         ,JP RSCS  90/04/27
JPNCCKU  JPNKISCT  Kyushu Univ                      ,JP NETDA 90/04/24
JPNCGU   JPNSUT30  Chuo-Gakuin University - Computer,JP RSCS  90/06/25
JPNCUN10 JPNNUCBA  Nanzan Univ                      ,JP RSCS  90/04/24
JPNDENTU JPNSNU10  Osaka Electro-Comm Univ          ,JP NETDA 90/06/25
JPNDOKYO JPNWAS00  Dokkyo Univ                      ,JP RSCS  90/04/24
JPNGUCC  JPNRKY00  Gakushuin Univ.                  ,JP NETDA 90/04/24
JPNHIROA JPNKISCT  Hiroshima Univ                   ,JP RSCS  90/04/24
JPNHUIS  JPNHIROA  Hiroshima Univ Grad Schl of Info ,JP UREP  90/04/27
JPNICEPP JPNWAS00  Univ of Tokyo ICEPP              ,JP RSCS  90/04/24
JPNISAS0 JPNTAMA0  Inst of Space & Astronautical Sci,JP NETDA 90/04/27
JPNISM01 JPNSUT00  Inst of Stat Math Stat Data Anal ,JP RSCS  90/06/25
JPNISSP  JPNWAS00  Univ of Tokyo/Inst for Solid St P,JP NJE   90/04/24
JPNIUJ01 JPNSWU10  Intl Univ of Japan Niigata       ,JP RSCS  90/04/27
JPNJAERI JPNWAS00  Japan Atomic Energy Res Ins      ,JP RSCS  90/04/24
JPNKBUDS JPNOIT10  Dept of Systems Eng              ,JP RSCS  90/04/24
JPNKEIO  JPNISSP   Keio Univ                        ,JP NJE   90/04/24
JPNKEKTR JPNKEKVM  KEK TRISTAN                      ,JP NJE   90/04/24
JPNKEKVM JPNSUT00  Kou Enerugi Ken, Tsukuba Japan   ,JP RSCS  90/04/24
JPNKEKVX JPNKEKVM  KEK Network                      ,JP JNET  90/04/24
JPNKGU01 JPNCUN10  Kinjo Gakuin Univ                ,JP NETDA 90/04/27
JPNKISCI JPNKISCT  Kyushu Institute of Tech - Iizuka,JP RSCS  90/04/24
JPNKISCM JPNKISCI  Kyushu Inst of Tech MVS          ,JP JES2  90/04/27
JPNKISCT JPNSUT50  Kyushu Institute of Tech         ,JP RSCS  90/04/24
JPNKIT   JPNSUT00  Kanazawa Inst. of Tech.          ,JP RSCS  90/04/24
JPNKNSU  JPNOIT20  Kansai Univ                      ,JP NJE   90/07/20
JPNKNU10 JPNKISCI  Kinki Univ                       ,JP RSCS  90/04/24
JPNKNZW1 JPNKIT    Kanazawa Univ Info Proc Ctr      ,JP NJE   90/07/20
JPNKSUVX JPNRINS   Kyoto Sangyo University - Faculty,JP JNET  90/06/25
JPNKUDPC JPNKYOTO  Kyoto Univ - Data Proc. Ctr.     ,JP NETDA 90/04/24
JPNKUHEL JPNKEKTR  Kyoto U HEPL                     ,JP NJE   90/04/24
JPNKYOTO JPNOIT10  Kyoto Univ Dept Info Sci         ,JP RSCS  90/04/24
JPNMU11  JPNISSP   Meiji Univ                       ,JP JES2  90/04/24
JPNMU21  JPNMU11   Meiji Univ                       ,JP NJE   90/04/24
JPNNIHOC JPNWAS00  Nihon U Col of Commerce          ,JP RSCS  90/04/24
JPNNME   JPNSNU10  Natl Museum of Ethol             ,JP RSCS  90/04/24
JPNNUCBA JPNSUT01  Nagoya Univ of Commerce          ,JP RSCS  90/04/24
JPNNUHEP JPNKEKTR  Nagoya U HEPL                    ,JP NJE   90/04/24
JPNOCHA1 JPNSWU10  Ochanomizu Univ                  ,JP RSCS  90/04/24
JPNOIT10 JPNSUT00  Osaka Inst of Tech               ,JP RSCS  90/04/24
JPNOIT20 JPNOIT10  Osaka Inst of Tech               ,JP NJE   90/06/25
JPNONRI  JPNNUCBA  Okazaki Nat'l Res Insti          ,JP JNET  90/04/24
JPNORIUT JPNORIXA  Ocean Rsrch Inst                 ,JP RSCS  90/06/25
JPNORIXA JPNSUT00  Ocean Rsrch Inst                 ,JP RSCS  90/06/25
JPNOSAKA JPNOIT10  Osaka Univ Ed Ctr                ,JP RSCS  90/04/24
JPNOSKFM JPNKEKTR  Osaka U HEPL                     ,JP NJE   90/04/24
JPNOUCC  JPNHIROA  OKAYAMA Univ Comp Ctr            ,JP RSCS  90/04/27
JPNOUC01 JPNOIT10  OSAKA Univ OF COMMERCE           ,JP RSCSV 90/04/27
JPNPNCT1 JPNJAERI  PNC Tokai Waste Tech Dev Div GIS ,JP RSCS  90/04/27
JPNRIFP  JPNKYOTO  Kyoto Univ                       ,JP RSCS  90/04/24
JPNRINS  JPNRIFP   Ryukoku Univ RINS Comp Ctr       ,JP RSCS  90/04/27
JPNRKNCC JPNRKY00  Inst of Phys & Chem Rsrch Comp Ct,JP NETDA 90/04/27
JPNRKY00 JPNWAS00  Rikkyo Univ                      ,JP NETDA 90/04/24
JPNSENDI JPNTOHOK  Sendai Jr Coll of Tech           ,JP RSCS  90/04/24
JPNSNU10 JPNOIT10  Setsunan Univ                    ,JP RSCS  90/04/24
JPNSNU20 JPNSNU10  Setsunan Univ                    ,JP RSCS  90/04/24
JPNSOKA  JPNSUT00  Soka Univ                        ,JP RSCS  90/06/25
JPNSUT00 CUNYVMV2  Science U of Tokyo               ,JP RSCS  90/05/29
JPNSUT01 JPNSUT00  Science Univ of Tokyo            ,JP RSCS  90/04/24
JPNSUT10 JPNSUT00  Science U Tokyo - Japan          ,JP RSCS  90/04/24
JPNSUT20 JPNSUT10  Science U Tokyo - Japan Kagurazak,JP RSCS  90/04/24
JPNSUT3A JPNSUT30  Science U Tokyo - Japan, Noda    ,JP RSCS  90/04/24
JPNSUT30 JPNSUT00  Science U Tokyo - Japan, Noda    ,JP RSCS  90/04/24
JPNSUT31 JPNSUT30  Science U of Tokyo Noda          ,JP JNET  90/04/24
JPNSUT40 JPNSUT00  Science U of Tokyo               ,JP RSCS  90/05/29
JPNSUT50 JPNSUT00  Scienc U Tokyo Y J Coll          ,JP RSCS  90/05/29
JPNSUT60 JPNSUT00  Science University of Tokyo Suwa ,JP RSCS
JPNSWU10 JPNSUT01  Showa Women's Univ               ,JP RSCS  90/04/24
JPNTAMA0 JPNWAS00  Tamagawa Univ                    ,JP RSCS  90/04/24
JPNTDUK  JPNRKY00  Tokyo Denki Univ Kanda           ,JP NETDA 90/04/27
JPNTDUS  JPNTDUK   Tokyo Denki Univ Hatoyama        ,JP NETDA 90/04/27
JPNTHKVX JPNTOHOK  Tohoku Univ                      ,JP JNET  90/04/24
JPNTIU01 JPNWAS00  Tokyo Intern'tl Univ             ,JP RSCS  90/04/24
JPNTKUVM JPNSUT00  Tokyo Keizai U                   ,JP RSCS  90/04/24
JPNTOHOK JPNSUT00  Tohoku Univ                      ,JP RSCS  90/04/24
JPNTOP   JPNTYAVM  Toyama Prefectual University - Co,JP NJE   90/07/19
JPNTSCVM JPNSUT01  IBM Tokyo Research               ,JP RSCS  90/04/24
JPNTSUKU JPNKEKVM  Univ of Tsukuba - SIPC           ,JP RSCS  90/04/24
JPNTSUK1 JPNTSUKU  U of Tsukuba - Sci Info Proc. Ctr,JP NJE   90/04/24
JPNTSUK2 JPNTSUKU  U of Tsukuba - SIPC              ,JP RSCS  90/04/24
JPNTYAVM JPNKIT    Toyama Univ                      ,JP RSCS  90/04/24
JPNUMIN  JPNUTHOS  U of Tokyo Hospitalumin          ,JP UREP  90/04/24
JPNUNU00 JPNUTHOS  United Nations Univ Comp Svcs    ,JP RSCS  90/04/27
JPNUOEH  JPNKISCT  Univ of Occ & Envir Health       ,JP JNET  90/04/24
JPNUTDME JPNSUT00  Univ of Tokyo                    ,JP RSCS  90/04/24
JPNUTHOS JPNUTDME  Univ of Tokyo                    ,JP RSCS  90/04/24
JPNUTINS JPNKEKTR  Univ of Tokyo - INS              ,JP NJE   90/04/24
JPNUTKOM JPNWAS00  Univ of Tokyo Coll of Arts & Sci ,JP RSCS  90/04/24
JPNWAS00 JPNSUT00  Waseda Univ                      ,JP RSCS  90/06/25

 * Network-soft gives you a hint about the machine-type. Non-IBM
   computers need different software to behave IBM-like in BITNET
   UREP = UNIX
   JNET = VAX/VMS
   JES2 = MVS from IBM (don't try to talk online with users there.
     The machine is a batch-specialist and can't talk to anybody
     outside)
   RSCS = VM from IBM
   NJE & NETDA = I hope sombody can tell me!!!


APPENDIX 2: JUNET DOMAINS

JP domains:
  ntt                    Nippon Telegraph and Telephone Corp.
  nttdata                NTT Data Communications Systems Corp.

AD domains:
  genome                 Genome Research Net
  jain                   Japan Academic Inter-University Network
  juice                  JUICE Network
  junet                  JUNET Network
  sinet                  Science Information Network
  tisn                   Todai Int'l. Science Network
  wide                   WIDE Internet

AC domains:
  aichi-med-u            Aichi Medical Univ.
  aitech                 Aichi Inst. of Technology
  akashi                 Akashi College of Technology
  akita-u                Akita Univ.
  aoyama                 Aoyama Gakuin Univ.
  ashitech               Ashikaga Inst. of Technology
  chiba-u                Chiba Univ.
  chubu                  Chubu Univ.
  chukyo-u               Chukyo Univ.
  chuo-u                 Chuo Univ.
  ciea                   Central Inst. of Exp. Animal Pre-Clinical Lab.
  dendai                 Tokyo Denki Univ.
  ehime-u                Ehime Univ.
  esumi-th               East Sumiyoshi Technical High School
  fit                    Fukuoka Inst. of Technology
  fukui-u                Fukui Univ.
  fukuoka-edu            Fukuoka Univ. of Education
  fukuoka-u              Fukuoka Univ.
  gifu-u                 Gifu Univ.
  gunma-u                Gunma Univ.
  hamamatsu-med          Hamamatsu Univ. School of Medicine
  hamamatsu-pc           Hamamatsu Polytechnic College
  himeji-du              Himeji Dokkyo Univ.
  himeji-tech            Himeji Inst. of Technology
  hiroshima-u            Hiroshima Univ.
  hit-u                  Hitotsubashi Univ.
  hokudai                Hokkaido Univ.
  hosei                  Hosei Univ.
  ibaraki                Ibaraki Univ.
  ims                    Inst. for Molecular Science
  isas                   Inst. of Space and Astronautical Science
  ism                    The Inst. of Statistical Mathematics
  it-chiba               Chiba Inst. of Technology
  it-hiroshima           Hiroshima Inst. of Technology
  iwakimu                Iwaki-meisei Univ.
  kanagawa-it            Kanagawa Inst. of Technology
  kanagawa-u             Kanagawa Univ.
  kanazawa-it            Kanazawa Inst. of Technology
  kanazawa-u             Kanazawa Univ.
  kansai-u               Kansai Univ.
  kawai-juku             Kawai Educational Institution
  keio                   Keio Univ.
  kek                    Nat'l. Lab. for High Energy Physics
  kindai                 Kinki Univ.
  kit                    Kyoto Inst. of Technology
  knct                   Kumamoto Nat'l. College of Technology
  kobe-kosen             Kobe City College of Technology
  kobe-u                 Kobe Univ.
  kobeuc                 Kobe Univ. of Commerce
  kochi-u                Kochi Univ.
  kogakuin               Kogakuin Univ.
  konan-u                Konan Univ.
  kouku-k                Tokyo Metropolitan College of Aeronautical Engr.
  kshosen                Kobe Shosen Univ.
  kumamoto-u             Kumamoto Univ.
  kurume-it              Kurume Inst. of Technology
  kushiro-ct             Kushiro Nat'l. College of Technology
  kwansei                Kwansei Gakuin Univ.
  kyoto-su               Kyoto Sangyo Univ.
  kyoto-u                Kyoto Univ.
  kyusan-u               Kyushu Sangyou Univ.
  kyushu-id              Kyushu Inst. of Design
  kyushu-u               Kyushu Univ.
  kyutech                Kyushu Inst. of Technology
  meiji                  Meiji Univ.
  mie-u                  Mie Univ.
  minpaku                Nat'l. Museum of Ethnology
  miyazaki-u             Miyazaki Univ.
  muroran-it             Muroran Inst. of Technology
  musabi                 Musashino Univ. of Arts
  nacsis                 Nat'l. Center for Science Information System
  nagano                 Nagano Univ.
  nagano-nct             Nagano Nat'l. College of Technology
  nagaoka-coltech        Nagaoka College of Technology
  nagaokaut              Nagaoka Univ. of Technology
  nagasaki-u             Nagasaki Univ.
  nagoya-u               Nagoya Univ.
  nanzan-u               Nanzan Univ.
  nao                    Nat'l. Astronomical Observatory
  nara-k                 Nara Nat'l. College of Technology
  nara-wu                Nara Women's Univ.
  nig                    Nat'l. Inst. of Genetics
  nihon-u                Nihon Univ.
  niigata-u              Niigata Univ.
  nijl                   Nat'l. Inst. of Japanese Literature
  nitech                 Nagoya Inst. of Technology
  oita-u                 Oita Univ.
  okaridai               Okayama Univ. of Science
  okayama-u              Okayama Univ.
  osaka-cu               Osaka City Univ.
  osaka-kyoiku           Osaka Kyoiku Daigaku
  osaka-med              Osaka Medical College
  osaka-tech             Osaka Inst. of Technology
  osaka-u                Osaka Univ.
  osakac                 Osaka Electro-Communication Univ.
  osakafu-u              Univ. of Osaka Prefecture
  otaru-uc               Otaru Univ. of Commerce
  pu-toyama              Toyama Prefectural Univ.
  rikkyo                 Rikkyo Univ.
  ritsumei               Ritsumeikan Univ.
  ryukoku                Ryukoku Univ.
  saga-u                 Saga Univ.
  saitama-u              Saitama Univ.
  sanno                  SANNO College
  sapmed                 Sapporo Medical College
  sasebo                 Sasebo College of Technology
  seikei                 Seikei Univ.
  seinan-gu              Seina Gakuin Univ.
  sendai-ct              Sendai Nat'l. College of Technology
  senshu-u               Senshu Univ.
  sheart                 Univ. of the Sacred Heart
  shiga-u                Shiga Univ.
  shinshu-u              Shinshu Univ.
  shizuoka               Shizuoka Univ.
  shudo-u                Hiroshima Shudo Univ.
  sophia                 Sophia Univ.
  sut                    Science Univ. of Tokyo
  t-gitan                Toyama Prefectural College of Technology
  takuma-ct              Takuma Nat'l College of Technology
  takushoku-u            Takushoku Univ.
  teu                    Tokyo Engr. Univ.
  titech                 Tokyo Inst. of Technology
  tiu                    Tokyo Int'l Univ.
  to-shinkeiken          Tokyo Shinkei Research Inst.
  tohoku                 Tohoku Univ.
  tohoku-gakuin          Tohoku Gakuin Univ.
  tohtech                Tohoku Institute of Technology
  tokushima-u            Tokushima Univ.
  tokuyama               Tokuyama Nat'l. College of Technology
  tokyo-ct               Tokyo Nat'l College of Technology
  tokyo-mptech           Tokyo College of Medico-pharmaco Technology
  tosho-u                Tokyo Shosen Univ.
  toyama-pc              Toyama Polytechnic College
  toyo                   Toyo Univ.
  toyota-ti              Toyota Technological Inst.
  tsuda                  Tsuda College
  tsukuba                Univ. of Tsukuba
  tsuruoka-nct           Tsuruoka Nat'l College of Technology
  tuat                   Tokyo Univ. of Agriculture and Technology
  tut                    Toyohashi Univ. of Technology
  u-gakugei              Tokyo Gakugei Univ.
  u-ryukyu               University of Ryukyus
  u-shizuoka-ken         Univ. of Shizuoka
  u-tokai                Univ. of Tokai
  u-tokyo                The Univ. of Tokyo
  uec                    The Univ. of Electro-Communications
  uitec                  Univ. of Ind. Technology
  ulis                   Univ. of Library and Information Science
  utsunomiya-u           Utsunomiya Univ.
  wakayama-th            Wakayama Prefectural Ind. High School
  wakayama-u             Wakayama Univ.
  waseda                 Waseda Univ.
  yamagata-u             Yamagata Univ.
  yamaguti-u             Yamaguchi Univ.
  yamanashi              Yamanashi Univ.
  ynu                    Yokohama Nat'l. Univ.
  yonago-k               Yonago Nat'l College of Technology

GO domains:
  aerospace-lab          Nat'l Aerospace Laboratory
  bosai                  Nat'l Research Inst. for Earth Science and Disaster
  crl                    Communications Research Lab.
  etl                    Electrotechnical Lab.
  fukui-kg               Ind. Technology Center of Fukui Prefecture
  fukushima-iri          Fukushima Industrial Research Inst.
  girin                  Gov't Industrial Research Inst. Nagoya
  gsj                    Geological Survey of Japan
  idlabh                 Ind. Development Lab. Hokkaido
  ipa                    Information-technology Promotion Agency, Japan
  iphlth                 The Inst. of Public Health
  ipri                   Ind. Products Research Inst.
  jaeri                  Japan Atomic Energy Research Inst.
  jnoc                   Japan Nat'l. Oil Corp., Technology Research Center
  jrdc                   Research Development Corp. of Japan
  jwa                    Japan Weather Association
  kagoshima-it           Kagoshima Prefectual Inst. of Industrial Technology
  kiri                   Mech. and Elect. Research Inst.
  kmt-iri                Kumamoto Ind. Research Inst.
  mel                    Mechanical Engr. Lab.
  nagasaki               Nagasaki Prefectural Government
  nasda                  Nat'l. Space Development Agency of Japan
  ncl                    Nat'l. Chemical Lab. for Ind., AIST, MITI
  ncvc                   Nat'l. Cardiovascular Center Research Inst.
  nihs                   Nat'l Inst. of Hygienic Science
  nrips                  Nat'l Research Inst. of Police Science
  okakogi                Okayama Prefecture Technical Center
  prit                   Tokyo Psychiatric Research Inst.
  riken                  Inst. of Physical and Chemical Research
  statci                 Kagaku Gijutsu Chou Kenkyuu Kouryuu Center
  tikusi                 Nat'l. Inst. of Animal Ind.
  wakayama               Wakayama Kenchou
  ysc                    Yokohama Science Popularizing Association for Youth

OR domains:
  aegis                  The Aegis Society
  astem                  Astem Research Inst.
  chemnet                CHEMNET Japan
  denken                 Central Research Inst. of Electric Power Ind.
  friend21               Friend 21 Research Center
  fuzzy                  Lab. for Int'l. Fuzzy Engr. Research
  genesys-p              Steering Committee of Genesys-P
  hats                   Promotion Conference of Harmonization of Advanced
                           Telecommunication
  icot                   Inst. for New Generation Computer Technology
  ijaic                  ICOT-JIPDEC AI Center
  imt-shizuoka           Inst. of Mechatronic Technology Foundation
  jafsa                  Ship and Ocean Foundation
  jeida                  Japan Electronic Industry Development Association
  jipdec                 Japan Information Processing Development Center
  juice                  JUICE Network (not JUNET)
  jus                    Japan UNIX Society
  kaba                   Kyoto Artificial Brain Associates
  kmt-technopolis        Kumamoto Technopolis Foundation
  nexus                  NeXT User Society
  nhk                    Japan Broadcasting Corporation
  peccom                 Sekiyu Sangyou Kasseika Center
  prug                   Packet Radio User's Group
  rerf                   Radiation Effects Research Foundation
  rinshoken              Tokyo Clinical Sciences Research Inst.
  rtri                   Railway Tech. Research Inst.
  sea                    Software Engineers Association
  senri-i                Senri Int'l. Information Ind.
  snet                   SNET
  shijokyo               Association of Computer Education for Private
                           Universities in Japan
  stanford-jc            Stanford Japan Center
  tiny                   Tsukuba Internet Club

CO domains:
  abc-kk                 ABC Corp.
  access                 Access Co., Ltd.
  adac                   Advanced Data Controls, Corp.
  aic                    Advanced Intelligent Communication System Lab.
  aichi-steel            Aichi Steel Works, Ltd.
  air                    AI Language Research Inst., Ltd.
  airco                  AIR Co., Ltd.
  aisoft                 AI Soft, Inc.
  allied-telesis         Allied Telesis, Inc.
  allumer                Allumer
  aml                    Advanced Materials Lab., Inc.
  analog                 Analog Devices Corp.
  ando-es                Ando Electric Engr. Service Co., Ltd.
  anritsu                Anritsu Corp.
  aplix                  Aplix Corp.
  apollo-j               Apollo Computer Japan
  apptec                 Applied Technology Co., Ltd.
  apple-opstech          Apple Operations and Technologies Japan
  arc-s                  Architectural Systems Inc.
  artstech               Arts Tech Inc.
  asahi                  Asahi Broadcasting
  asahi-eng              Asahi Engr.
  asahi-kasei            Asahi Chemical Industry Co., Ltd.
  asahi-np               The Asahi Shimbun Publishing Co., Ltd.
  asahi-techno           Asahi Techno-Computer Corp.
  asatsu                 Asatsu, Inc.
  ascii                  ASCII Corp.
  asi                    Advanced Solutions Inc.
  asics                  ASICS
  asp                    ASP Corp.
  asr                    ASR Corp.
  astec                  Astec, Inc.
  atr                    Advanced Telecomm. Research Inst. Int'l.
  att                    AT&T Unix Pacific Co., Ltd.
  attjens                AT&T Jens Corp.
  attsoftj               AT&T Software Japan, Ltd.
  axis                   AXIS Corp.
  bootsystems            Boot Systems Japan Corp.
  bridge                 Bridge Inc.
  brother                Brother Ind. Co., Ltd.
  bug                    BUG Inc.
  bussan-advsys          Bussan Advanced Systems Corp.
  c-creators             Computer Creators, Inc.
  cac                    Computer Applications Co., Ltd.
  canon                  Canon Inc.
  canon-soft             Canon Software Corp.
  canopus                Canopus Electric Co., Ltd.
  casio                  Casio
  cat                    System House CAT
  cec                    Chuo Electric Co., Ltd.
  chuo-computer          Chuo Computer Co.,Ltd.
  cij                    Computer Inst. of Japan, Ltd.
  citizen                Citizen Watch Co., Ltd.
  citoh                  C. Itoh & Co., Ltd.
  clipper                Systems Clipper Inc.
  comm-net               Communication Net Corp.
  convex-j               Comvex Computer Ltd.
  cray                   Cray Research Japan Ltd.
  crc                    CRC Research Inst., Inc.
  creo-rd                Creo R & D Co., Ltd.
  crosscat               Cross Cat Corp.
  csk                    CSK Corp.
  daikin                 Daikin Ind. Co.
  datacontrol            Data Control Ltd.
  db-soft                dB-SOFT, Inc.
  dcl                    Yokogawa Digital Computer Corp.
  dec-j                  Digital Equipment Corp. Japan
  densan                 Densan Corp.
  diaconsult             Dia Consultants Co., Ltd.
  digital                Digital
  dit                    Dit Co., Ltd.
  dnp                    Dai Nippon Printing Co., Ltd.
  edr                    Japan Electronic Dictionary Research Inst., Ltd.
  epson                  Seiko Epson
  eric                   Eric
  foretune               Foretune Co., Ltd
  fuji-ric               Fuji Research Institute Corp.
  fujidenki              Fuji Electric Corporate R & D, Ltd.
  fujifilm               Fuji Photo Film Co., Ltd.
  fujita                 Fujita Corp.
  fujitsu                Fujitsu Ltd.
  fujixerox              Fuji Xerox Co., Ltd.
  furukawa               Furukawa Electric Co., Ltd.
  furuno                 Furuno Electric Co., Ltd.
  future-tech            Future Technology Laboratories, Inc.
  futuresystem           Future System Service Co.,Ltd.
  gctech                 Graphics Communication Technologies R & D Dept.
  global                 Global Science Co., Ltd.
  gmd                    GMD-bureau, Tokyo
  goldcoast              Gold Coast Productions Co., Ltd.
  goldman                Goldman Sacks
  greencross             The Green Cross Corp.
  haft                   HAFT Technology, Inc.
  hallab                 HAL Lab., Inc.
  hankyu                 Hankyu Dentetsu Corp.
  hexard                 Hexard Inc.
  hitachi                Hitachi, Ltd.
  hitachi-cable          Hitachi Cable, Ltd.
  hitachi-chem           Hitachi Chemical Ind. Corp.
  hitachi-hipro          Hitachi Process Computer Engr., Inc.
  hitachi-sk             Hitachi Software Engr. Corp.
  hitachi-system         Hitachi System Engineering, Ltd.
  hitachizosen           Hitachi Zosen Corp.
  honda                  Honda Motor Co., Ltd.
  horiba                 Horiba Seisaku
  hos                    HOS Corp.
  howdy                  Howdy Int'l Co., Ltd.
  hst                    Hirata Software Technology Co., Ltd.
  hudson                 Hudson Co., Ltd.
  human-system           Human Systems Inc.
  hyperware              Hyperware Corp.
  ibix                   IBIX Co., Ltd.
  ibm                    IBM Japan, Ltd.
  icat                   ICAT Corp.
  icfd                   Inst. of Computational Fluid Dynamics
  icm                    ICM Co., Ltd.
  ihi                    Ishikawajima-Harima Heavy Ind. Co., Ltd.
  image-f                Computer Art Form Image Factory
  imagica                Imagica Corp.
  imslab                 Information and Mathematical Science Lab., Inc.
  inmet                  Nihon Intermetrics Corp.
  int21                  Int21 Co., Ltd.
  intec                  Intec Inc.
  intel-j                Intel Japan Corp.
  intelligent-systems    Intelligent Systems Co., Ltd.
  isac                   Int'l. Sekisu AI Corp.
  isid                   Information Services Int'l. - Dentsu, Ltd.
  iwanami                Iwanami Shoten, Publishers
  jal-cs                 JAL Jouhou Kaihatsu
  jasco                  Jasco, Japan Spectroscopic Co., Ltd
  jba                    Japan Business Automation Co., Ltd.
  jcc                    Japan Computer Corp.
  jepro                  JEPRO Co., Ltd.
  jip                    Japan Information Processing Service Co., Ltd.
  jmas                   JMA Systems Corp.
  jorudan                Jorudan Co., Ltd.
  jsd                    Joint System Development Corp.
  jusoft                 Nippon Unisoft Corp.
  just                   Just System
  jvc-victor             Japan Victor Corp.
  k-compiler             Knowledge Compiler, Inc.
  kajima                 Kajima Corp.
  kao                    Kao
  kawaju                 Kawasaki Heavy Ind. Corp.
  kawasaki-steel         Kawasaki Steel Co.
  kcc-comp-consul        Kinki Computer Consultant, Inc.
  kcs                    KCS Corp.
  kcs-soft               KCS Soft Corp.
  kddlabs                KDD Lab.
  kepco                  The Kansai Electric Power Co., Ltd.
  ker                    Kinryo Engr.
  kke                    Kozo Keikaku Engr. Inc.
  knowledge              Knowledge Co., Ltd.
  knowledge-eng          Knowledge Engineering, Ltd.
  kobelco                Kobe Steel, Ltd.
  kobelcosys             Kobelco Systems Corp.
  kokusai-kogyo          Kokusai Kogyo Co., Ltd.
  komatsu                Komatsu Ltd.
  konami                 Konami, Ltd.
  kpress                 Kabushiki Shinbun, Inc.
  kthree                 Kanri Kogaku Kenkyusho, Ltd.
  kubota                 Kubota Ltd.
  kyocera                Kyocera Corp.
  kyoto-sr               Kyoto Software Research, Inc.
  kysa                   Kyoto Software Application Inc.
  lambda                 Lambda Systems Inc.
  lifeboat               Lifeboat, Ltd.
  lsi-j                  LSI Japan Co., Ltd.
  m-kasei                Mitsubishi Kasei
  macro                  Macro Engr.
  mandc                  M & C Shinagawa Office Co., Ltd.
  maspro                 Maspro Denko Corp.
  mazda                  Mazda Motor Corp.
  mbrain                 Max Brain
  mediadrive             Media Drive Lab.
  mei                    Matsushita Electric Ind. Co., Ltd.
  meidensha              Meidensha Corp.
  meitec                 Meitec Corp.
  meitetsu               Nagoya Railroad Co., Ltd.
  melco                  Mitsubishi Electric Corp.
  mhi                    Mitsubishi Heavy Ind., Ltd.
  microcad               Micro CAD Inc.
  mignon                 Mignon Systems, Inc.
  mipec                  Mitsui Petrochemical Ind., Ltd.
  misystems              M.I. Systems
  mita                   Mita Ind. Co., Ltd.
  mitsui                 Mitsui & Co., Ltd.
  mitsui-knowledge       Mitsui Knowledge Ind. Co., Ltd
  miwa                   Miwa Systems Consulting Co., Ltd.
  mocoil                 Mitsubishi Oil Co., Ltd.
  mogami-wire            Mogami Wire & Cable Co.
  mot-j                  Nippon Motorola, Ltd.
  mri                    Mitsubishi Research Inst., Inc.
  msassoc                Micro Software Associates Co., Ltd.
  msi                    Mathematical Systems, Inc.
  msr                    Mitsuizosen Systems Research
  murai-electric         Murai Electric Works Co., Ltd.
  n-denso                Nihon Denso Corp.
  nagoya-denki           Nagoya Electric Works Co., Ltd.
  nakasha                Nakasha Curieitebu Co., Ltd.
  nalgo                  Nippon Algorithm Company, Ltd.
  namco                  Namco Co.,Ltd.
  ncc-consul             Japan Computer Consultants, Inc.
  ncd                    NCD Japan, Inc.
  nck                    Nishinippon Computer Co., Ltd.
  ndg                    Nihon Data General
  ndr                    NDR Co., Ltd.
  nec                    NEC Corp.
  nesco                  Nichimen Electronic Systems Co.
  netone                 NetOne Systems Co., Ltd.
  next                   Next Foundation Co., Ltd.
  nichigai               Nichigai Associates, Inc.
  nichimen-nds           Nichimen Data Syatems Corp.
  nihonmusen             Nihon Musen Corp.
  nikon                  Nikon Corp.
  nintendo               Nintendo Co., Ltd.
  nippon-computer-system Nippon Computer Systems Co., Ltd.
  nippon-control-system  Japan Control Systems, Inc.
  nippon-mining          Nippon Mining Co., Ltd.
  nishitsuu              System Nishitsu
  nissan                 Nissan Jidousha
  nissho-ele             Nissho Electronics Corp.
  nissin                 NISSIN Electric Co., Ltd.
  nk-exa                 NK-EXA Co., Ltd.
  nkk                    NKK Corp.
  nmcc                   Nihon Micom Hanbai
  nova                   Nova Corp.
  nri                    Nomura Research Inst., Ltd.
  ns-ace                 Nakano Software Ace
  nsc                    Nippon Steel Corp.
  nss                    Nisshin Systems
  nssys                  Nihon Sogo System
  ntec                   NTT Gijutsu Iten
  nts                    Nippon Timeshare Co., Ltd.
  ntt-itn                NTT Internet Co., Ltd.
  ntts                   NTT Software
  oki                    Oki Electric Ind. Co., Ltd.
  okit                   Okit Corp.
  omnis                  Omnis, Inc.
  omron                  Omron Corp.
  omronsoft              Omron Software Co., Ltd.
  osakagas               Osaka Gas Co.
  oshikiri               Oshikiri Machinery, Ltd.
  paltec                 Paltec Corp.
  pentel                 Pentel Co., Ltd.
  peri                   Protein Engr. Research Inst.
  personal-media         Personal Media Corp.
  pioneer                Pioneer Electronic Corp.
  profile                Profile Co. Ltd.
  prompt                 Prompt Corp.
  publinix               Publinix Corp.
  radix                  Radix Co., Ltd.
  recruit                Inst. for Supercomputing Research, Recruit
  reed                   Reed Corp.
  research               Research, Inc.
  ricoh                  Ricoh Co., Ltd.
  rics                   Research Inst. for Computer Science, Inc.
  rikei                  Rikei Corp.
  rokugo                 Rokugo System Electronic Industry Corp.
  roland                 Roland Corp.
  sanei                  Sanei Co.
  sanwa-ss               Sanwa Seisakusho
  sanyo                  Sanyo Electric Co., Ltd.
  sc-htc                 SC Hitech Center
  scr                    SCR Corp.
  screen                 Dainippon Screen Seizou
  seaside                Seaside Software Inc.
  secom                  Secom Intelligent Systems Lab.
  seiwa                  Seiwa Electric Mfg. Co., Ltd.
  sekisui                Sekisui Chemical Co., Ltd.
  sept                   Sept, Inc.
  sgi                    Nihon Silicon Graphics, Inc.
  sharp                  Sharp Corp.
  shimz                  Shimizu Corp.
  shinko-elec            Sinko Electric Corp.
  shionogi               Shionogi & Co., Ltd.
  sibasoku               Shibasoku Corp.
  sigma                  Sigma Systems Corp.
  softbank               Softbank Corp.
  soliton                Soliton Systems Corp.
  sony                   Sony Corp.
  sonytek                Sony Tektro
  sord                   Sord Computer Corp.
  soum                   Soum Corp.
  spec                   System Planning and Engr. Corp.
  squid-tech             Superconducting Sensor Lab.
  sra                    Software Research Associates, Inc.
  ssk                    Nippon System Services Co., Ltd.
  sstech                 SS Technology Co., Ltd.
  stanley                Stanley Electric Co., Ltd.
  stepone                Stepone Corp.
  strategic              Strategic Research Inst.
  studio-zoo             Zoo corp.
  studiogen              StudioGEN, Inc.
  sumiden                Sumitomo Electric Ind., Ltd.
  sumiden-ws             Sumitomo Electric Workstation Corp.
  sumikin                Sumitomo Metal Ind., Ltd.
  japan.sun.com          Sun Microsystems Inc., Japan
  sunjapan               SunJapan Co., Ltd.
  suri                   Surigiken Corp.
  swire                  Swire Transtech, Ltd.
  symbolics              Nihon Symbolics Corp.
  sysplan                Sysplan, Inc.
  system-keikaku         Research Inst. of Systems Planning
  system-plus            System Plus Co., Ltd.
  system-proud           System Proud Co., Ltd.
  systemsoft             Systemsoft Corp.
  taisei                 Taisei Corp.
  takaoka-electric       Takaoka Electric Mfg. Co., Ltd.
  tbs                    Tokyo Broadcasting Systems, Inc.
  tds                    Tokyo Denshi Sekkei Co., Ltd.
  technonet              Technonet, Inc.
  teijin                 Teijin
  telema                 Telematique Int'l. Research Lab.
  tepco                  Tokyo Electric Power Corp.
  teradata-j             Teradata Japan Ltd.
  tis                    Toyo Information Systems Co., Ltd.
  tmr                    Technical Marketing Research, Inc.
  tms                    Toppan Moore Systems, Ltd.
  togra                  Tokyo Graphic Arts
  tokimec                Tokimec, Inc.
  tokyo-gas              Tokyo Gas, Ltd.
  tokyo-shoseki-ptg      Tokyo Shoseki Printing Co., Ltd.
  tokyoelectron          Tokyo Electron Co.
  toppan                 Toppan Printing Co. Ltd.
  toshiba                Toshiba Corp.
  total                  Total Systems Inst. Co., Ltd.
  totsu                  Totsu Sangyou Corp.
  toyo-eng               Toyo Engr. Corp.
  toyo-stl               Toyo Stainless Corp.
  toyodenki              Toyo Denki Seizo Corp.
  toyohashi-techno       Toyohashi Techno-Science Co., Ltd.
  toyota                 Toyota Motor Corp.
  toyota-body            Toyota Auto Body Co., Ltd.
  tradtech               Trad Technologies Corp.
  tsi                    Toden Software, Inc.
  twics                  TWICS
  tytlabs                Toyota Central R & D Lab., Inc.
  uclosk                 Universal Computer Lab. Corp.
  ulvac                  Ulvac Corporate Center
  unipress               Unipress Software Japan, Inc.
  unisol                 Unisolu Co., Ltd.
  unisys                 Nihon Unisys, Ltd.
  uniuni                 Unisys, Union Systems Co., Ltd.
  usc                    USC Corp.
  valid                  Nihon Valid Logic Systems Co., Ltd.
  wacom                  Wacom Co. Ltd.
  widget                 Widget Inc.
  windriver              Wind River Systems Corp.
  word-house             Word House
  worldpoint             Worldpoint
  xopen                  X/Open Co., Ltd.
  yamaha                 Yamaha Corp.
  yaskawa                Yaskawa Electric Mfg. Co., Ltd.
  yhp                    Yokogawa Hewlett Packard Computer Operation
  yinu                   Yinu Systems, Inc.
  ykk                    Yoshida Kogyo Corp.
  yokogawa               Yokogawa Electric Corp.
  yujin                  Yujin Inc.
  zuken                  Zuken Corp.


APPENDIX 3: JUNET NEWS NEWSGROUPS

fj.ai                       Artificial intelligence discussions
fj.announce                 General announcements of interest to all
                              (Moderated)
fj.binaries.mac             Encoded Macintosh programs in binary
fj.binaries.misc            Encoded programs in binary not covered elsewhere
fj.binaries.msdos           Encoded MS-DOS programs in binary (Moderated)
fj.binaries.msdos.d         Topics on softwares posted to fj.binary.msdos
fj.books                    Books of all genres, shapes, and sizes
fj.comp.arch                Computer architecture
fj.comp.comm                Discussion about software & hardware for
                              communications
fj.comp.image               Computer graphics, art, animation, image
                              processing
fj.comp.misc                General topics about computers not covered
                              elsewhere
fj.comp.music               Topics about computers and music
fj.comp.oops                Object Oriented Programming, System, etc
fj.comp.parallel            Discussion about parallel computing
fj.comp.printers            Printers, hardware & software
fj.comp.texhax              Discussion about TeXhax and delivery of mailing
                              list
fj.comp.text                Text processing issues and methods
fj.editor.emacs             EMACS editors of different flavors
fj.editor.misc              Talk about editors
fj.editor.sse               Discussion about SSE (Simple Screen Editor)
fj.followup                 Followups to articles in fj.general
fj.forsale                  Short, tasteful postings about items for sale
fj.general                  *Important* and timely announcements of interest
                              to all
fj.guide.admin              Junet guide for administrators (Moderated)
fj.guide.general            Junet guide. Rules, Convention, etc (Moderated)
fj.guide.newusers           Explanatory postings for new users (Moderated)
fj.info-terms               All sorts of terminals
fj.jokes                    Joke and humor
fj.junet                    General discussion about JUNET itself
fj.jus                      Information about JUS
fj.kanakan.misc             Discussion about kana-kanji henkan
fj.kanakan.wnn              Discussion about Wnn kana-kanji henkan system
fj.kanji                    Discussion about Kanji
fj.kermit                   Discussion about kermit package
fj.lan                      Local area network hardware and software
fj.lang.ada                 Discussion about Ada*
fj.lang.c                   Discussion about C
fj.lang.forth               Discussion about Forth
fj.lang.lisp                Discussion about LISP
fj.lang.misc                Different computer languages not specifically
                              listed
fj.lang.mod2                Discussion about Modula-2
fj.lang.postscript          PostScript language and related topics
fj.lang.prolog              Discussion about PROLOG
fj.lang.st80                Discussion about Smalltalk 80
fj.lectures                 Informative talks given to the news readers
fj.living                   Discussions about various things in daily life
fj.mail                     Proposed new mail/network standards
fj.mail-lists.apollo        Apollo workstation mailing list (Moderated)
fj.mail-lists.common-lisp   Common lisp mailing list from ARPA (Moderated)
fj.mail-lists.connectionist Connectionist mailing list (Moderated)
fj.mail-lists.info-japan    Info-japan mailing list from ARPA (Moderated)
fj.mail-lists.nihongo       Nihongo mailing list from ARPA (Moderated)
fj.mail-lists.occam         Occam mailing list from ARPA (Moderated)
fj.mail-lists.parallel      comp.parallel mailing list (Moderated)
fj.mail-lists.reduce        Reduce mailing list (Moderated)
fj.mail-lists.types         Types mailing list from ARPA (Moderated)
fj.mail-lists.x-window      X window mailing list from ARPA (Moderated)
fj.meetings                 announce for conference, workshop, etc
                              (Not-moderated)
fj.misc                     Various discussions that there are no groups to
                              match
fj.net-people               Announcements, requests, etc. about people on
                              the net
fj.news.adm                 Comments directed to news administrators
fj.news.b                   Discussion about B news software
fj.news.config              Postings of system down times and configuration
                              change
fj.news.group               Discussions and lists of newsgroups
fj.news.lists               News-related statistics and lists
fj.news.map                 Various maps, including UUCP maps
fj.news.misc                Discussions of network news on JUNET itself
fj.news.newsite             Postings of new site announcements
fj.news.sa                  Comments directed to system administrators
fj.os.minix                 Discussion about the MINIX operating system
fj.os.misc                  Discussion about operating systems not covered
                              elsewhere
fj.os.msdos                 Discussion about the MSDOS operating system
fj.os.os9                   Discussion about the OS9 operating system
fj.papers                   Papers of all genres
fj.ptt                      Information about PTT
fj.questions.junet          Questions especially about JUNET
fj.questions.misc           Questions about miscellaneous subjects
fj.questions.unix           Questions especially about UNIX
fj.rec.aerospace            About aviation, airplanes, airsports, etc.
fj.rec.animation            Discussion about animated movies
fj.rec.autos                Automobiles, automotive products and laws
fj.rec.av                   High fidelity audio and video components
fj.rec.baseball             Discussion about baseball
fj.rec.bikes                Motorcycles and Bicycles, related products and
                              laws
fj.rec.comics               The funnies, old and new
fj.rec.food                 Food, wine, spirits, cooking, cookbooks, and
                              recipes
fj.rec.games                Discussion about games and computer games
fj.rec.games.scores         Personal best scores of games and computer games
fj.rec.ham                  topics about ham radio
fj.rec.idol                 General topics about idol
fj.rec.marine               Marine recreation. Diving, swimming, yachting,
                              etc.
fj.rec.misc                 Recreational/participant topics not covered
                              elsewhere
fj.rec.movies               Reviews and discussions of movies
fj.rec.music                Discussion about music
fj.rec.music.classical      Talk around classical music
fj.rec.music.progressive    Talk around progressive rock
fj.rec.mystery              Talk about mystery
fj.rec.photo                Topics about cameras and photographs
fj.rec.rail                 Discussion about railway & railroad
fj.rec.sf                   Discussion about science fiction
fj.rec.sports               Topics about sports
fj.rec.sports.football      Talk around footballs
fj.rec.sports.keiba         About horseracing
fj.rec.sports.prowrestling  About prowrestling
fj.rec.sports.ski           About skiing
fj.rec.travel               Traveling all over the world
fj.rec.tv                   Talk about television and its shows
fj.sci.astro                Discussion about stars, planets and comets
fj.sci.lang                 Natural languages, communication, etc
fj.sci.math                 Mathematical discussions and pursuits
fj.sci.misc                 Discussions about sciences not covered elsewhere
fj.soc.culture              Group about (japanese?) culture
fj.soc.law                  Topics on Law and rights
fj.soc.men-women            Fairness, Rights, etc. Between women and men
fj.soc.misc                 Socially-oriented topics not covered elsewhere
fj.soc.tech                 Topics on society and technology
fj.sources                  For the posting of software packages &
                              documentation
fj.sources.d                For any discussion of source postings
fj.sources.mac              Software for the Apple Macintosh
fj.std                      Discussion about various standards
fj.sys.famicom              Discussion about Nintendo's Family Computer
fj.sys.j3100                Discussion about TOSHIBA's J3100-family
                              computers
fj.sys.mac                  Discussion about the Apple Macintosh & Lisa
fj.sys.misc                 Discussion about computers of all other kinds
fj.sys.news                 Discussion about SONY NEWS workstation
fj.sys.next                 NeXT workstation and related topics
fj.sys.pc98                 Discussion about NEC's PC-9800 & other computers
fj.sys.sun                  Discussion about SUN workstation
fj.sys.x68000               Discussion about Sharp's X-68000 & other
                              computers
fj.test                     Testing all over JUNET. Very boring
fj.unix                     UNIX neophytes group
fj.unix.wizards             Discussions, bug reports, and fixes on and for
                              UNIX
fj.wanted                   Requests for things that are needed
fj.windows.gmw              GMW window systems
fj.windows.misc             Miscellaneous window systems
fj.windows.x                About X window systems


APPENDIX 4: FREEWARE/SHAREWARE SOURCES

SOFTWARE/FILE NAME  PLATFORM   SOURCE
^^^^^^^^^^^^^^^^^^  ^^^^^^^^   ^^^^^^
JAPAN.INF 1.2       any        FTP: ucdavis.edu (128.120.2.1)
                               FTP: msi.umn.edu (128.101.24.1)
                               EMAIL: lunde@adobe.com
JemTeX v2.0         any        FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
jgrep.c 1.0b1       any        FTP: ucdavis.edu (128.120.2.1)
                               EMAIL: lunde@adobe.com
jis.c 2.2           any        FTP: ucdavis.edu (128.120.2.1)
                               EMAIL: lunde@adobe.com
jouyou-kanji.txt    any        FTP: ucdavis.edu (128.120.2.1)
                               EMAIL: lunde@adobe.com
kbanner2            any        FTP: ginkaku.kudpc.kyoto-u.ac.jp (130.54.8.71)
                               EMAIL: ftp@ginkaku.kudpc.kyoto-u.ac.jp
print-jis.c 1.1     any        FTP: ucdavis.edu (128.120.2.1)
                               EMAIL: lunde@adobe.com
repair-jis.c 1.0    any        FTP: ucdavis.edu (128.120.2.1)
                               EMAIL: lunde@adobe.com
values.c 1.4        any        FTP: ucdavis.edu (128.120.2.1)
                               EMAIL: lunde@adobe.com
jenscript           UNIX       FTP: a.nl.cs.cmu.edu (128.2.250.143)
JSTEVIE 1.2         UNIX       FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
                               FTP: mindseye.berkeley.edu (128.32.232.19)
kanjips             UNIX       FTP: a.nl.cs.cmu.edu (128.2.250.143)
kterm               UNIX       FTP: crl.nmsu.edu (128.123.1.14)
                               FTP: expo.lcs.mit.edu (18.30.0.212)
                               FTP: kum.kaist.ac.kr (137.68.1.65)
                               FTP: kythera.nmsu.edu (128.123.1.14)
mp                  UNIX       FTP: a.nl.cs.cmu.edu (128.2.250.143)
NEmacs/TAMAGO       UNIX       FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
                               FTP: clover.ucdavis.edu (128.120.57.1)
                               FTP: june.cs.washington.edu (128.95.1.4)
                               FTP: sauna.hut.fi (130.233.192.1)
                               FTP: russell.stanford.edu (36.9.0.9)
                               FTP: mtfuji.gw.u-tokyo.ac.jp (128.167.64.2)
                               FTP: ftp.cs.titech.ac.jp (131.112.16.39)
nepoch              UNIX       FTP: scslwide.sony.co.jp (133.138.199.1)
NKF                 UNIX       FTP: ucdavis.edu (128.120.2.1)
Wnn 4.0.3           UNIX       FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
EDICTJ              MS-DOS     FTP: monu6.cc.monash.edu.au (130.194.1.106)
hterm 2.6.0.0       MS-DOS     FTP: azabu.tkl.iis.u-tokyo.ac.jp (130.69.16.7)
hterm 2.6.0.-2      MS-DOS     FTP: msdos.archive.umich.edu (141.211.164.153)
JDIC                MS-DOS     FTP: monu6.cc.monash.edu.au (130.194.1.106)
JREADER             MS-DOS     FTP: monu6.cc.monash.edu.au (130.194.1.106)
KD                  MS-DOS     FTP: mindseye.berkeley.edu (128.32.232.19)
MOKE 1.1            MS-DOS     FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
NBCC.ZIP            MS-DOS     OTHER: CompuServe's FLEFO section
NJStar 2.0          MS-DOS     FTP: jmonu6.cc.monash.edu.au (130.194.1.106)
ASLEdit+ 1.0/a30    Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)
ASLFont+            Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)*
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)*
ASL KConvert 1.0/a3 Macintosh  FTP: ucdavis.edu (128.120.2.1)
ASLTelnet 2.3/b2    Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)
                               FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
GomTalk7 v1.2.1     Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)
                               FTP: scslwide.sony.co.jp (133.138.199.1)
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)
Inline++EGB 1.0     Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
Inline++VJE 1.0.1   Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
JapanPaper 1.0      Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)
jBASHING 1.41       Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
JGREP v1.0b1        Macintosh  FTP: scslwide.sony.co.jp (133.138.199.1)
JIS v2.2            Macintosh  FTP: scslwide.sony.co.jp (133.138.199.1)
Kenkyusha Stack     Macintosh  EMAIL: lunde@adobe.com
Kojien Stack        Macintosh  EMAIL: lunde@adobe.com
Koshigaya           Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)*
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)*
KTCustomizer        Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
Kuten Code Table    Macintosh  FTP: ucdavis.edu (128.120.2.1)
K2!                 Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)*
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)*
MacKc 0.93          Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
                               FTP: scslwide.sony.co.jp (133.138.199.1)
miniWRITER 1.71     Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)
NCSATelnet-J        Macintosh  FTP: utsun.s.u-tokyo.ac.jp (133.11.11.11)
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)
NinjaTerm 0.962     Macintosh  FTP: ucdavis.edu (128.120.2.1)
Nisus 3.06 demo     Macintosh  FTP: weber.ucsd.edu (128.54.16.129)
PRINT-JIS v1.1      Macintosh  FTP: scslwide.sony.co.jp (133.138.199.1)
REPAIR-JIS v1.0     Macintosh  FTP: scslwide.sony.co.jp (133.138.199.1)
Shizuoka Font Set   Macintosh  FTP: ucdavis.edu (128.120.2.1)
SysFontINIT         Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)*
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)*
Tokyo               Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)*
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)*
VALUES v1.4         Macintosh  FTP: scslwide.sony.co.jp (133.138.199.1)
VJE InLINE 2.3C     Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
YooEdit 0.95        Macintosh  FTP: ftp.tohoku.ac.jp (130.34.8.9)
Yoshinogari         Macintosh  FTP: sumex-aim.stanford.edu (36.44.0.6)*
                               FTP: ftp.tohoku.ac.jp (130.34.8.9)*

* = this program/file is part of a file called japan-fonts.hqx


APPENDIX 5: COMMERCIAL SOFTWARE SOURCES

SOFTWARE/FILE NAME  PLATFORM   SOURCE
^^^^^^^^^^^^^^^^^^  ^^^^^^^^   ^^^^^^
EW+                 MS-DOS     ?
IBM DOS J5.0/V      MS-DOS     K Electronics/Sprint-Hill Corp./I/O Software
MOKE 2.1            MS-DOS     KiCompWare
Smart Characters    MS-DOS     APROPOS Incorporated
Yukara              MS-DOS     Kureo R & D
2ByWord             Macintosh  MacSTATION, Inc.
ATM-J 2.0.4         Macintosh  SystemSoft America
BlueHawk            Macintosh  In Japan
ByWord              Macintosh  MacSTATION, Inc.
EGBook              Macintosh  MacSTATION, Inc./Qualitas Trading Company
EGBridge 5.1r2      Macintosh  MacSTATION, Inc. or w/EGWord or Solo Writer
EGTalk 2.0          Macintosh  MacSTATION, Inc./Qualitas Trading Company
EGWord              Macintosh  MacSTATION, Inc./Qualitas Trading Company
FutoGoB101-Bold     Macintosh  SystemSoft America
FutoMinA101-Bold    Macintosh  SystemSoft America
Jun101-Light        Macintosh  SystemSoft America
KanjiSama           Macintosh  Sanbi Software
KanjiTalk 6.0.7     Macintosh  Apple/Twilight Clone/d e v e l o p CD-ROM
Katana 4.0          Macintosh  MacSTATION, Inc. or w/WaltzWord
MacVJE 2.5          Macintosh  MacSTATION, Inc. or w/MacWord or MacWriteII-J
MacWord             Macintosh  MacSTATION, Inc.
MacWriteII-J        Macintosh  MacSTATION, Inc.
MidashiGo-MB31      Macintosh  SystemSoft America
MidashiMin-MA31     Macintosh  SystemSoft America
ModeNihongo         Macintosh  MacSTATION, Inc.
Nisus 3.06          Macintosh  Paragon Concepts/Any Mail Order House
PageMaker 3.5J      Macintosh  MacSTATION, Inc./Qualitas Trading Company
QuarkXPress 2.0J    Macintosh  MacSTATION, Inc.
rSTONE 2.1          Macintosh  MacSTATION, Inc./Qualitas Trading Company
rSTONE.JE 1.0       Macintosh  MacSTATION, Inc./Qualitas Trading Company
rSTONE.KC 1.0       Macintosh  MacSTATION, Inc./Qualitas Trading Company
SoloWriter 1.22     Macintosh  MacSTATION, Inc./Qualitas Trading Company
SweetJAM 7.0        Macintosh  MacSTATION, Inc./Qualitas Trading Company
TurboJIP 1.2        Macintosh  MacSTATION, Inc. or w/TurboWriter
TurboWriter         Macintosh  MacSTATION, Inc.
WaltzWord           Macintosh  MacSTATION, Inc.
Wnn                 Macintosh  MacSTATION, Inc. or w/2ByWord
zeroByWord          Macintosh  MacSTATION, Inc.
