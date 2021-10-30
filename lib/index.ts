export { Client, createClient, Config, Logger, LogLevel, Statistics } from "./client"
export { User, Friend } from "./friend"
export { Discuss, Group } from "./group"
export { Member } from "./member"
export { StrangerInfo, FriendInfo, GroupInfo, MemberInfo } from "./entities"
export { Gfs, GfsDirStat, GfsFileStat } from "./gfs"
export { Gender, GroupRole, OnlineStatus } from "./common"
export { ErrorCode, LoginErrorCode } from "./errors"
export { Message, PrivateMessage, GroupMessage, DiscussMessage, ForwardMessage, Forwardable, Quotable,
	MusicPlatform, Sendable, Anonymous, MessageElem, FileElem, ReplyElem,
	TextElem, AtElem, FaceElem, BfaceElem, MfaceElem, ImageElem, MiraiElem,
	FlashElem, PttElem, VideoElem, XmlElem, JsonElem, ShareElem, LocationElem, PokeElem,
	parseDmMessageId, parseGroupMessageId, parseImageFileParam } from "./message"
export { PrivateMessageEvent, GroupMessageEvent, DiscussMessageEvent, MessageRet,
	FriendAddReqEvent, GroupAddReqEvent, GroupInviteReqEvent, EventMap,
	FriendIncreaseEvent, FriendDecreaseEvent, FriendRecallEvent, FriendPokeEvent,
	MemberIncreaseEvent, MemberDecreaseEvent, GroupRecallEvent, GroupPokeEvent,
	GroupAdminEvent, GroupMuteEvent, GroupTransferEvent } from "./events"
export { ApiRejection, Device, Apk, Platform, Domain } from "./core"
export { segment } from "./util"
export * as core from "./core"

export function getGroupImageUrl(md5: string) {
	return `https://gchat.qpic.cn/gchatpic_new/0/0-0-${md5.toUpperCase()}/0`
}
