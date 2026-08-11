import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  Hash,
  Briefcase,
  Pencil,
  Clock,
  Trash2,
} from "lucide-react";

interface Draft {
  id: string;
  name: string;
  platform: "Blog" | "Twitter" | "LinkedIn";
  status: "Draft" | "Scheduled";
  lastEdited: string;
}

const drafts: Draft[] = [
  {
    id: "1",
    name: "Q3 Marketing Strategy Overview",
    platform: "Blog",
    status: "Draft",
    lastEdited: "2 hours ago",
  },
  {
    id: "2",
    name: "Product Launch Announcement Thread",
    platform: "Twitter",
    status: "Scheduled",
    lastEdited: "Yesterday",
  },
  {
    id: "3",
    name: "5 Tips for Remote Team Productivity",
    platform: "LinkedIn",
    status: "Draft",
    lastEdited: "3 days ago",
  },
];

export function RecentDraftsTable() {
  // Platform Icon Helper
  const getPlatformIcon = (platform: Draft["platform"]) => {
    switch (platform) {
      case "Blog":
        return <FileText className="w-4 h-4 text-[#6E7976]" />;
      case "Twitter":
        return <Hash className="w-4 h-4 text-[#6E7976]" />;
      case "LinkedIn":
        return <Briefcase className="w-4 h-4 text-[#6E7976]" />;
    }
  };

  return (
    <div className="bg-white border border-[#E0E3E1] rounded-2xl shadow-sm overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-xl font-bold text-[#181C1B]">Recent Drafts</h2>
        <Link
          href="/drafts"
          className="text-[#00695C] hover:text-[#004F45] font-semibold text-sm transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F7FAF8] hover:bg-[#F7FAF8] border-y border-[#E0E3E1]">
            <TableHead className="px-6 text-xs font-semibold uppercase text-[#6E7976] tracking-wider py-3">
              Draft Name
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#6E7976] tracking-wider py-3">
              Platform
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#6E7976] tracking-wider py-3">
              Status
            </TableHead>
            <TableHead className="text-xs font-semibold uppercase text-[#6E7976] tracking-wider py-3">
              Last Edited
            </TableHead>
            <TableHead className="px-6 text-right text-xs font-semibold uppercase text-[#6E7976] tracking-wider py-3">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drafts.map((draft) => (
            <TableRow
              key={draft.id}
              className="border-b border-[#E0E3E1] hover:bg-[#F7FAF8]/50 transition-colors"
            >
              {/* Draft Name */}
              <TableCell className="px-6 py-4 font-semibold text-sm text-[#181C1B]">
                {draft.name}
              </TableCell>

              {/* Platform */}
              <TableCell className="py-4">
                <div className="flex items-center gap-2 text-sm text-[#3E4946]">
                  {getPlatformIcon(draft.platform)}
                  <span>{draft.platform}</span>
                </div>
              </TableCell>

              {/* Status Badge */}
              <TableCell className="py-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    draft.status === "Scheduled"
                      ? "bg-[#DDEAFF] text-[#004282]"
                      : "bg-[#EAEFEA] text-[#3E4946]"
                  }`}
                >
                  {draft.status}
                </span>
              </TableCell>

              {/* Last Edited */}
              <TableCell className="py-4 text-sm text-[#6E7976]">
                {draft.lastEdited}
              </TableCell>

              {/* Actions */}
              <TableCell className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-3 text-[#6E7976]">
                  <button
                    type="button"
                    className="hover:text-[#181C1B] transition-colors p-1"
                    title="Edit"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="hover:text-[#181C1B] transition-colors p-1"
                    title="Schedule / History"
                  >
                    <Clock className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="hover:text-red-600 transition-colors p-1"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}